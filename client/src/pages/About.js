import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { Avatar, Grid, Typography, makeStyles, Paper } from "@material-ui/core";
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
  chip: {
    margin: theme.spacing(1),
  },
  ghAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    border: "5px solid " + theme.palette.primary.main,
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  ghStat: {
    backgroundColor: "rgba(81,83,85, 0.4)",
    padding: theme.spacing(1),
    display: "inline-block",
    margin: theme.spacing(0.25),
    width: "100%",
  },
  ghPaper: {
    padding: theme.spacing(2),
  },
  iconText: {
    display: "flex",
    alignItems: "center",
    verticalAlign: "middle",
  },
}));

const Intro = (props) => (
  <Typography variant="body1" gutterBottom>
    Hello! I'm Siddharth, a software engineer and developer in the{" "}
    <HyperLink
      url="https://en.wikipedia.org/wiki/Greater_Vancouver"
      className={props.css}
    >
      Greater Vancouver Area, BC, Canada
    </HyperLink>
    . I enjoy building things out of code. I am always looking to apply my
    problem-solving skills into software I develop and have a knack for high
    quality code.
    <br />
    <br />I am an active member of the Stackoverflow online community where I
    help other developers resolve their problems related to software
    development. I am also an active reviewer for the content posted on
    Stackoverflow.
  </Typography>
);

const Education = (props) => (
  <Typography variant="body1" gutterBottom>
    After completing my secondary education from{" "}
    <HyperLink
      url="https://en.wikipedia.org/wiki/Gurgaon"
      className={props.css}
    >
      Gurgaon, India
    </HyperLink>{" "}
    , I moved to Canada to pursue my post-secondary education. I am currently in
    my final year of studies whilst pursuing a Bachelor's in Computing Science
    from{" "}
    <HyperLink
      url="https://en.wikipedia.org/wiki/Simon_Fraser_University"
      className={props.css}
    >
      Simon Fraser University, Burnaby
    </HyperLink>
    . My expected graduation date is{" "}
    <HyperLink
      url="https://www.timeanddate.com/calendar/monthly.html?year=2021&month=6&country=27"
      className={props.css}
    >
      June, 2021
    </HyperLink>
    .
  </Typography>
);

const WorkExp = (props) => {
  const { css } = props;
  return (
    <Fragment>
      <Typography variant="body1">
        Recently completed an 8 month co-op{" "}
        <HyperLink url="https://www.blackberry.com/us/en" className={css}>
          @BlackBerry Inc
        </HyperLink>{" "}
        in{" "}
        <HyperLink url="https://en.wikipedia.org/wiki/Burnaby" className={css}>
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

const GithubProfile = (props) => {
  const [userData, setUserData] = useState(null);
  const { css } = props;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user`);
        let user = await res.data;
        setUserData(user);
      } catch (err) {
        console.log(err.message);
        setUserData(null);
      }
    })();
  }, []);

  return (
    userData && (
      <Grid item xs={12} md={10}>
        <Paper elevation={3} className={css.ghPaper}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h4" color="primary" gutterBottom>
                Github Profile
              </Typography>
            </Grid>
            {/* Avatar/Name/handle */}
            <Grid item xs={12} md={4}>
              <Avatar
                alt="Github Avatar"
                component={HyperLink}
                src={userData.avatar_url}
                className={css.ghAvatar}
                url={userData.html_url}
              />
              <Typography component="center" variant="h5">
                {userData.name}
              </Typography>
              <Typography component="center" variant="h6">
                <HyperLink url={userData.html_url}>@{userData.login}</HyperLink>
              </Typography>
            </Grid>
            {/* Stats */}
            <Grid item xs={12} md={5}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                  <Paper elevation={0} className={css.ghStat}>
                    <center>
                      <Typography variant="h6">
                        {userData.public_repos}
                      </Typography>
                      <Typography variant="button">Repositories</Typography>
                    </center>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={0} className={css.ghStat}>
                    <center>
                      <Typography variant="h6">{userData.followers}</Typography>
                      <Typography variant="button">Followers</Typography>
                    </center>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={0} className={css.ghStat}>
                    <center>
                      <Typography variant="h6">{userData.following}</Typography>
                      <Typography variant="button">Following</Typography>
                    </center>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  );
};

const About = (props) => {
  const css = useStyles();
  return (
    <Grid container spacing={1} justify="center" alignItems="flex-start">
      <Grid item xs={12} md={10}>
        <Paper elevation={3} className={(css.gridItem, css.paper)}>
          <Typography variant="h2" color="primary" gutterBottom>
            About Me
          </Typography>
          <Intro css={css.green} />
          <br />
          <Education css={css.red} />
          <br />
          <WorkExp />
        </Paper>
      </Grid>
      <GithubProfile css={css} />
    </Grid>
  );
};

export default About;
