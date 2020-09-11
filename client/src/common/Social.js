import React from "react";
import { IconButton, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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
  contactBtn: {
    margin: theme.spacing(1),
    borderRadius: 999,
  },
}));

const SocialLinks = (props) => {
  const css = useStyles();
  return (
    <React.Fragment>
      <IconButton href={social.linkedin} className={css.linkedin}>
        <LinkedInIcon />
      </IconButton>
      <IconButton href={social.github} className={css.github}>
        <GitHubIcon />
      </IconButton>
      <Button
        size="large"
        variant="outlined"
        rounded
        color="secondary"
        component={Link}
        to="/contact"
        className={css.contactBtn}
      >
        Get in touch
      </Button>
    </React.Fragment>
  );
};

export default SocialLinks;
