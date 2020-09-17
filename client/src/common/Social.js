import React from "react";
import { IconButton, makeStyles, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";

const social = {
  linkedin: "https://www.linkedin.com/in/siddg97/",
  github: "https://github.com/siddg97",
  resume:
    "https://docs.google.com/document/d/1LAapr1PCYuXhAowhTx3IDkeNga-KsrPwkD-Uloenaso/edit?usp=sharing",
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
  resume: {
    borderRadius: 999,
    margin: theme.spacing(1),
  },
}));

const SocialLinks = (props) => {
  const css = useStyles();
  return (
    <React.Fragment>
      <IconButton
        href={social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={css.linkedin}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href={social.github}
        target="_blank"
        rel="noopener noreferrer"
        className={css.github}
      >
        <GitHubIcon />
      </IconButton>
      <Button
        startIcon={<GetAppIcon />}
        size="large"
        variant="outlined"
        component="a"
        color="secondary"
        href={social.resume}
        className={css.resume}
      >
        Resume
      </Button>
      <Button
        size="large"
        variant="outlined"
        component="a"
        color="secondary"
        href={social.resume}
        className={css.resume}
      >
        Resume
      </Button>
    </React.Fragment>
  );
};

export default SocialLinks;
