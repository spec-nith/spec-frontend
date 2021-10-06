import {
  faHome,
  faUsers,
  faImages,
  faChalkboardTeacher,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
const navItems = [
  {
    name: "Home",
    route: "",
    icon: faHome,
    active: false,
  },
  {
    name: "Gallery",
    route: "gallery",
    icon: faImages,
    active: false,
  },
  {
    name: "Workshop",
    route: "workshop",
    icon: faChalkboardTeacher,
    active: false,
  },
  {
    name: "Team Spec",
    route: "team",
    icon: faUsers,
    active: false,
  },
  {
    name: "Our Alumni",
    route: "alumni",
    icon: faUserGraduate,
    active: false,
  },
];
export default navItems;
