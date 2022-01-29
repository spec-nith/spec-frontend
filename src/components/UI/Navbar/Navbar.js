import React, { Component } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "assets/images/logo.ico";
import NavItem from "./NavItem";
import NavbarItems from "./Items";
import { Location } from "@reach/router";
import { debounce } from "assets/utils/helpers";
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
        <nav className="hidden md:block fixed w-full h-16 text-gray-200 z-50 opacity-90 top-0">
          {/* Desktop View starts */}
          <div className={"hidden md:flex justify-between w-full "+ (!this.state.visible ? "scrolled-down" : "scrolled-up")+(this.state.isBg ? " bg-zinc-900" : null)}>
            <img src={logo} alt="Logo" className="ml-6 md:mt-4 h-10 w-10" />
            <div className="flex ">
            {NavbarItems.map((element,index) => (
              <NavItem item={element} key={index+Math.random()} clicked={this.drawerHandler} icons={false}/>
              ))}
            </div>
          </div>
          </nav>
          {/* Desktop View ends */}
          {/* Mobile View starts */}
          <div className="md:hidden flex fixed top-0 text-gray-200 z-20">
            <button
              className="top-0 h-16 w-16"
              aria-label="Open Menu"
              onClick={() =>
                this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
              }
            >
              <FontAwesomeIcon className="text-2xl" icon={faBars} fixedWidth/>
            </button>
          </div>
          {/* transparent Backdrop starts */}
          {this.state.isOpen && 
          <div
            v-show="isOpen"
            className="z-10 fixed inset-0 transition-opacity">
            <div
              onClick={this.drawerHandler}
              className="absolute inset-0 opacity-0"
              onKeyDown={this.drawerHandler}
              role="button" tabIndex="0" aria-label="menu-btn"></div>
          </div>}
          {/* transparent Backdrop ends */}
          <aside
            className={`text-gray-200 transform top-0 left-0 w-64 bg-zinc-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${this.state.isOpen ? "translate-x-0" : "-translate-x-full"}`}
            onClick={this.drawerHandler} onKeyDown={this.drawerHandler}
          >
            <span
              onClick={this.drawerHandler}
              onKeyDown={this.drawerHandler}
              role="button" tabIndex="0" aria-label="menu-btn"
              className="flex w-full items-center p-4 border-b"
            >
              <img src={logo} alt="Logo" className="h-16 w-16 mx-auto" />
            </span>
            {NavbarItems.map((element,index) => (
              <NavItem item={element} key={index+Math.random()} clicked={this.drawerHandler} icons={true} />
            ))}
          </aside>
          {/* Mobile View ends */}
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
