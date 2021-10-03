import React, { Component } from "react";
import { Transition } from "@headlessui/react";
import {
  faHome,
  faAlignJustify,
  faUsers,
  faImages,
  faChalkboardTeacher,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "assets/images/logo.ico";
import NavItem from "./NavItem";

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
        <nav class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
          <div class="flex items-center">
            <button
              class="mr-2"
              aria-label="Open Menu"
              onClick={() =>
                this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
              }
            >
              <FontAwesomeIcon className="text-2xl" icon={faAlignJustify} />
            </button>
            <img src={logo} alt="Logo" class="ml-2 h-10 w-10" />
          </div>
          {/* <div class="flex items-center">
      <div class="hidden md:block md:flex md:justify-between md:bg-transparent">
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
              class="z-10 fixed inset-0 transition-opacity"
            >
              <div
                onClick={this.drawerHandler}
                class="absolute inset-0 bg-black opacity-50"
                tabindex="0"
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
              class="flex w-full items-center p-4 border-b"
            >
              <img src={logo} alt="Logo" class="h-16 w-16 mx-auto" />
            </span>
            <NavItem
              name="Home"
              icon={faHome}
              clicked={this.drawerHandler}
              route=""
            />
            <NavItem
              name="Gallery"
              icon={faImages}
              route="gallery"
              clicked={this.drawerHandler}
            />
            <NavItem
              name="Workshops"
              icon={faChalkboardTeacher}
              route="workshop"
              clicked={this.drawerHandler}
            />
            <NavItem
              name="Team Spec"
              icon={faUsers}
              route="team"
              clicked={this.drawerHandler}
            />
            <NavItem
              name="Our Alumni"
              icon={faUserGraduate}
              route="alumni"
              clicked={this.drawerHandler}
            />
            <div class="fixed bottom-0 w-full">
              {/* <a rel="noopener"
          class="flex items-center p-4 bg-orange-700 text-white "
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

export default Navbar;
