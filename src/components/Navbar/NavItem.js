import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const NavItem = ({ item, icons }) => {
  const location = useLocation()
    .pathname.split("/")
    .filter((e) => e); //for removing empty elements coming from leading and trailing '/'
  let path = location.includes(item.route); //checks if the route is present in current URL
  return !item.external ? (
    <Link
      to={"/" + item.route}
      activeClassName="block btn-gradient text-white md:rounded-full"
    >
      <span
        onClick={item.clicked}
        className={
          "flex items-center px-3 py-2 md:py-1 md:rounded-full hover:bg-violet-900/90 md:hover:rounded-full hover:text-white " +
          (path && "btn-gradient text-white")
        }
        onKeyDown={item.clicked}
        role="button"
        tabIndex="0"
      >
        {icons && (
          <span className="mr-2">
            <FontAwesomeIcon className="text-lg" icon={item.icon} />
          </span>
        )}
        <span className="block px-3 py-2 md:py-1 text-base font-medium">
          {item.name}
        </span>
      </span>
    </Link>
  ) : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://drive.google.com/drive/folders/1_R5x_sAkFsrC4RRgPOygdzydzDhtHBOQ?usp=sharing"
    >
      <span
        onClick={item.clicked}
        onKeyDown={item.clicked}
        role="button"
        tabIndex="0"
        className={
          "flex items-center px-3 py-2 md:py-1 hover:btn-gradient hover:text-white " +
          (path && "btn-gradient text-white")
        }
      >
        {icons && (
          <span className="mr-2">
            <FontAwesomeIcon className="text-lg" icon={item.icon} fixedWidth />
          </span>
        )}
        <span className="block px-3 py-2 md:py-1 rounded-md text-base font-medium">
          {item.name}
        </span>
      </span>
    </a>
  );
};
export default NavItem;
