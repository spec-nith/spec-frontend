import React, { Component } from "react";
import { Transition } from "@headlessui/react";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "assets/images/logo.ico";
import NavItem from "./NavItem";
import NavbarItems from "./Items";
import { Location } from "@reach/router";
import { debounce } from "components/helpers";
import "assets/styles/nav.css";

class Navbar extends Component {
  state = {
    isOpen: false,
    visible:true,
    scrollPosition:0,
    isBg:false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    var scrollComponent = this;
    this._isMounted = true;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleBg();
    });
  }
  toggleBg() {
    if (this._isMounted === true) {
      if (window.pageYOffset > 100) {
        this.setState({
          isBg: true,
        });
      } else {
        this.setState({
          isBg: false,
        });
      }
    }
  }

  handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    const prevScrollPos = this.state.scrollPosition;
    this.setState({
      visible:
        (prevScrollPos >= currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
          ? true
          : false,
      scrollPosition: currentScrollPos,
    });
  }, 100);
  
  drawerHandler = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className={"flex fixed w-full items-center justify-between px-6 h-16 navbar-color text-white z-50 opacity-90 " + (!this.state.visible ? "scrolled-down" : "scrolled-up")+(this.state.isBg ?" bg-zinc-800":null)}>
          <div className="flex justify-between w-full">
            <div className="md:hidden flex">
            <button
              className="mr-2"
              aria-label="Open Menu"
              onClick={() =>
                this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
              }
            >
              <FontAwesomeIcon className="text-2xl" icon={faAlignJustify} />
            </button>
            </div>
            <img src={logo} alt="Logo" className="ml-6 md:mt-4 h-10 w-10" />
            <div className="hidden md:flex">
            {NavbarItems.map((element) => (
              <NavItem item={element} clicked={this.drawerHandler} icons={false}/>
              ))}
              </div>
          </div>
          {/* <div className="flex items-center">
      <div className="hidden md:block md:flex md:justify-between md:bg-transparent">
       </div>
     </div> */}

          <Transition
            show={this.state.isOpen}
            enter="ease-out transition-medium"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-out transition-medium"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              // keydown....esc
              v-show="isOpen"
              className="z-10 fixed inset-0 transition-opacity"
            >
              <div
                onClick={this.drawerHandler}
                className="absolute inset-0 navbar-color opacity-50"
                onKeyDown={this.drawerHandler}
                role="button" tabIndex="0" aria-label="menu-btn"
              ></div>
            </div>
          </Transition>
          <aside
            className={`transform top-0 left-0 w-64 navbar-color fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
              this.state.isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <span
              onClick={this.drawerHandler}
              onKeyDown={this.drawerHandler}
                role="button" tabIndex="0" aria-label="menu-btn"
              className="flex w-full items-center p-4 border-b"
            >
              <img src={logo} alt="Logo" className="h-16 w-16 mx-auto" />
            </span>
            {NavbarItems.map((element) => (
              <NavItem item={element} clicked={this.drawerHandler} icons={true} />
            ))}
            <div className="fixed bottom-0 w-full">
              {/* <a rel="noopener"
          className="flex items-center p-4 bg-orange-700 text-white "
          href=""
          target="_blank">
        </a> */}
            </div>
          </aside>
        </nav>
      </React.Fragment>
    );
  }
}

const nav= (props) => (
  <Location>
    {(locationProps) => <Navbar {...locationProps} {...props} />}
  </Location>
);

export default nav;
