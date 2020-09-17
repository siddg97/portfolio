import React from "react";

import DescriptionIcon from "@material-ui/icons/Description";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";

import { Home, About, Portfolio, Contact } from "../pages";

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
    icon: <DescriptionIcon />,
  },
  {
    path: "/portfolio",
    component: <Portfolio />,
    name: "Portfolio",
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
