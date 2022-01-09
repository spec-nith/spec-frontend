// Import Components
import React, { Component } from "react";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStickyNote  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import Drawer from "@mui/material/Drawer";
import { debounce } from "components/helpers";

// Import Styles
import "assets/styles/nav.css";

// Import Static Assests
import logoLong from "assets/images/logo.png";
import logo from "assets/images/logo.ico";

// Import Constants
import NavbarItems from "./Items";

// Begin
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      navItmes: NavbarItems,
      visible: true,
      scrollPosition: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
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
  
  toggleDrawer = (open) => {
    this.setState({drawerOpen: open})
  }
  render() {
    return (
      <nav
        className={
          "bg-gray-800 w-full z-10 fixed " +
          (!this.state.visible ? "scrolled-down" : "scrolled-up")
        }
      >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* --------------- Mobile Menu Button Begin --------------- */}
                  <Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => this.toggleDrawer(true)}>
                    <span className="sr-only">Open main menu</span>
                    <FontAwesomeIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                        icon={faBars}
                      />
                  </Button>
                  {/* --------------- Mobile Menu Button End --------------- */}
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  {/* --------------- Logo Begin --------------- */}
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={logoLong}
                      alt="Workflow"
                    />
                  </div>
                  {/* --------------- Logo End --------------- */}
                  {/* --------------- Nav Links Begin --------------- */}
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {this.state.navItmes.map((item) => (
                        <Link
                          key={item.name}
                          to={item.route}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                          activeClassName="px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <a href="https://drive.google.com/drive/folders/1_R5x_sAkFsrC4RRgPOygdzydzDhtHBOQ?usp=sharing" target="_blank" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Notes</a>
                    </div>
                  </div>
                  {/* --------------- Nav Links End --------------- */}
                </div>
              </div>
            </div>
            {/* --------------- Mobile Menu Begin --------------- */}
            <Drawer anchor={"left"} open={this.state.drawerOpen} onClose={() => this.toggleDrawer(false)}>
              {this.state.navItmes.map((item) => (
                <Link
                  key={item.name}
                  to={item.route}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  activeClassName="block px-3 py-2 rounded-md text-base font-medium bg-gray-900 text-white"
                >
                  {item.name}
                </Link>
              ))}
              <span className="inline">
                <FontAwesomeIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                          icon={faStickyNote}
                />
                <a href="https://drive.google.com/drive/folders/1_R5x_sAkFsrC4RRgPOygdzydzDhtHBOQ?usp=sharing" target="_blank" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Notes</a>
              </span>
            </Drawer>
            {/* --------------- Mobile Menu End --------------- */}
      </nav>
    );
  }
}
