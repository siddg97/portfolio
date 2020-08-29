import React from "react";

import InfoIcon from "@material-ui/icons/Info";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";

import { Home, About, Resume, Contact } from "./pages";

const routes = [
  {
    path: "/",
    component: <Home />,
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/about",
    component: <About />,
    name: "About",
    icon: <InfoIcon />,
  },
  {
    path: "/resume",
    component: <Resume />,
    name: "Resume",
    icon: <AssessmentIcon />,
  },
  {
    path: "/contact",
    component: <Contact />,
    name: "Contact",
    icon: <ContactMailIcon />,
  },
];

export { routes };
