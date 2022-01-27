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
    route: "",
    icon: faHome,
    external: false,
  },
  {
    name: "Gallery",
    route: "gallery",
    icon: faImages,
    external: false,
  },
  {
    name: "Workshop",
    route: "workshop",
    icon: faChalkboardTeacher,
    external: false,
  },
  {
    name: "Team Spec",
    route: "team",
    icon: faUsers,
    external: false,
  },
  {
    name: "Our Alumni",
    route: "alumni",
    icon: faUserGraduate,
    external: false,
  },
  {
    name: "Notes",
    route: "https://drive.google.com/drive/folders/1_R5x_sAkFsrC4RRgPOygdzydzDhtHBOQ?usp=sharing",
    icon: faStickyNote,
    external: true,
  },
];
export default navItems;
