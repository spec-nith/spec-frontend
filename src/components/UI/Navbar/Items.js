import {
  faHome,
  faUsers,
  faImages,
  faChalkboardTeacher,
  faUserGraduate,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
const navItems = [
  {
    name: "Home",
    route: "/",
    icon: faHome,
    external: false,
  },
  {
    name: "Gallery",
    route: "/gallery",
    icon: faImages,
    external: false,
  },
  {
    name: "Workshop",
    route: "/workshop",
    icon: faChalkboardTeacher,
    external: false,
  },
  {
    name: "Team",
    route: "/team",
    icon: faUsers,
    external: false,
  },
  {
    name: "Alumni",
    route: "/alumni",
    icon: faUserGraduate,
    external: false,
  },
];
export default navItems;
