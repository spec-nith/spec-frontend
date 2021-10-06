import React, { Component } from "react";
import { Transition } from "@headlessui/react";
import {faAlignJustify} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "assets/images/logo.ico";
import NavItem from "./NavItem";
import NavbarItems from "./Items";
import { Location } from "@reach/router";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  drawerHandler = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
          <div className="flex items-center">
            <button
              className="mr-2"
              aria-label="Open Menu"
              onClick={() =>
                this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
              }
            >
              <FontAwesomeIcon className="text-2xl" icon={faAlignJustify} />
            </button>
            <img src={logo} alt="Logo" className="ml-2 h-10 w-10" />
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
                className="absolute inset-0 bg-black opacity-50"
                tabIndex="0"
              ></div>
            </div>
          </Transition>
          <aside
            className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
              this.state.isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <span
              onClick={this.drawerHandler}
              className="flex w-full items-center p-4 border-b"
            >
              <img src={logo} alt="Logo" className="h-16 w-16 mx-auto" />
            </span>
            {NavbarItems.map((element) => (
              <NavItem item={element} clicked={this.drawerHandler} />
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

export default (props) => (
  <Location>
    {(locationProps) => <Navbar {...locationProps} {...props} />}
  </Location>
);
