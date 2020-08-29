import React from "react";

import InfoIcon from "@material-ui/icons/Info";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";

const routes = [
  {
    path: "/",
    component: <div>Home page</div>,
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/about",
    component: <div>About page</div>,
    name: "About",
    icon: <InfoIcon />,
  },
  {
    path: "/resume",
    component: <div>Resume page</div>,
    name: "Resume",
    icon: <AssessmentIcon />,
  },
  {
    path: "/contact",
    component: <div>Contact page</div>,
    name: "Contact",
    icon: <ContactMailIcon />,
  },
];

export { routes };
