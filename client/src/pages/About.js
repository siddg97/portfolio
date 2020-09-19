import React, { Fragment } from "react";

import { Grid, Typography, makeStyles, Avatar } from "@material-ui/core";
import { HyperLink } from "../common";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(3),
    },
  },
  green: {
    color: theme.palette.custom.date,
  },
  red: {
    color: theme.palette.custom.tag,
  },
  text: {
    fontSize: 18,
  },
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    marginTop: theme.spacing(1),
    border: "5px solid " + theme.palette.secondary.main,
  },
}));

const Intro = (props) => (
  <Typography variant="body1" gutterBottom className={props.text}>
    I'm Siddharth, a software engineer and developer in the{" "}
    <HyperLink
      url="https://en.wikipedia.org/wiki/Greater_Vancouver"
      className={props.color}
    >
      Greater Vancouver Area, BC, Canada
    </HyperLink>
    . I enjoy building software in both individual and team environments. My
    passion is fueled by my understanding of technologies in the field of
    computing science and fascination of how two bits 0 and 1 have transformed
    technology and software today.
    <br />
    <br />I am always looking to apply my problem-solving skills into software I
    develop and have a knack for high quality code. I also am an active member
    and reviewer of the stackoverflow online community where I help other
    developers resolve their problems related to software development.
  </Typography>
);

const Education = (props) => (
  <Typography variant="body1" gutterBottom className={props.text}>
    After completing my secondary education from{" "}
    <HyperLink
      url="https://en.wikipedia.org/wiki/Gurgaon"
      className={props.color}
    >
      Gurgaon, India
    </HyperLink>{" "}
    , I moved to Canada to pursue my post-secondary education. I am currently in
    my final year of studies whilst pursuing a Bachelor's in Computing Science
    from{" "}
    <HyperLink
      url="https://en.wikipedia.org/wiki/Simon_Fraser_University"
      className={props.color}
    >
      Simon Fraser University, Burnaby
    </HyperLink>
    . My expected graduation date is{" "}
    <HyperLink
      url="https://www.timeanddate.com/calendar/monthly.html?year=2021&month=6&country=27"
      className={props.color}
    >
      June, 2021
    </HyperLink>
    .
  </Typography>
);

const WorkExp = (props) => {
  const { color, text } = props;
  return (
    <Fragment>
      <Typography variant="body1" className={text}>
        Recently completed an 8 month co-op{" "}
        <HyperLink url="https://www.blackberry.com/us/en" className={color}>
          @BlackBerry Inc
        </HyperLink>{" "}
        in{" "}
        <HyperLink
          url="https://en.wikipedia.org/wiki/Burnaby"
          className={color}
        >
          Burnaby, BC
        </HyperLink>
        . My daily activities included development of firmware and tools used in
        Digital Signal Processing and Pre processing for automobile equipment
        and acoustics using C/C++ and writing test scripts for the same in
        Python.
      </Typography>
    </Fragment>
  );
};

const About = (props) => {
  const css = useStyles();
  return (
    <Grid container spacing={1} justify="center" alignItems="flex-start">
      <Grid item xs={12} md={10}>
        <Typography
          variant="h2"
          color="primary"
          gutterBottom
          className={css.gridItem}
        >
          About Me
        </Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        <Intro color={css.green} text={css.text} />
        <br />
        <Education color={css.red} text={css.text} />
        <br />
        <WorkExp text={css.text} />
      </Grid>
      <Grid item xs={12} md={10}>
        <center>
          <Avatar
            className={css.avatar}
            src={`${process.env.REACT_APP_SERVER_URL}/assets/me.jpg`}
            alt="Siddharth Gupta"
          />
        </center>
      </Grid>
    </Grid>
  );
};

export default About;
