import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const social = {
  linkedin: "https://www.linkedin.com/in/siddg97/",
  github: "https://github.com/siddg97",
};

const useStyles = makeStyles((theme) => ({
  linkedin: {
    backgroundColor: theme.palette.custom.linkedin,
    margin: theme.spacing(1),
  },
  github: {
    backgroundColor: theme.palette.custom.github,
    margin: theme.spacing(1),
  },
}));

const SocialLinks = (props) => {
  const css = useStyles();
  return (
    <React.Fragment>
      <IconButton href={social.linkedin} className={css.linkedin}>
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton href={social.github} className={css.github}>
        <GitHubIcon fontSize="large" />
      </IconButton>
    </React.Fragment>
  );
};

export default SocialLinks;
