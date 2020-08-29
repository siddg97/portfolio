import React from "react";

import DescriptionIcon from "@material-ui/icons/Description";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";

<<<<<<< HEAD
import { Home, About, Portfolio, Contact } from "../pages";
=======
import { Home, About, Resume, Contact } from "../pages";
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup

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
<<<<<<< HEAD
    path: "/portfolio",
    component: <Portfolio />,
    name: "Portfolio",
=======
    path: "/resume",
    component: <Resume />,
    name: "Resume",
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
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
