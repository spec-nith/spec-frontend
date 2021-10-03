import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
const navItem = (props) => {
  return (
    <span
      onClick={props.clicked}
      className="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
    >
      <span className="mr-2">
        <FontAwesomeIcon className="text-lg" icon={props.icon} fixedWidth />
      </span>
      <Link
        to={"/" + props.route}
        className="block px-3 py-2 rounded-md text-base font-medium"
      >
        {props.name}
      </Link>
    </span>
  );
};
export default navItem;
