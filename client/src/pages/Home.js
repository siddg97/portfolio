import React from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import { SocialLinks } from "../common";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    [theme.breakpoints.up("md")]: {
      marginTop: "20vh",
    },
  },
  place: {
    color: theme.palette.custom.location,
  },
  date: {
    color: theme.palette.custom.date,
  },
  thing: {
    color: theme.palette.custom.entity,
  },
}));

const Home = (props) => {
  const css = useStyles();
  const preventDefault = (e) => e.preventDefault();
  return (
    <Grid
      direction="column"
      container
      spacing={2}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={10} className={css.gridItem}>
        <Typography variant="h3" color="primary">
          Hi, my name is
        </Typography>
        <Typography variant="h1" gutterBottom>
          Siddharth Gupta
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          I am a{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Software_engineer"}
            onClick={preventDefault}
            target="_blank"
            rel="noreferrer noopener"
            className={css.date}
          >
            Software Engineer
          </Link>{" "}
          rooted in the{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Greater_Vancouver"}
            onClick={preventDefault}
            target="_blank"
            rel="noreferrer noopener"
            className={css.place}
          >
            Greater Vancouver Area, BC
          </Link>
          . Previously{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Software_development"
            onClick={preventDefault}
            className={css.thing}
            target="_blank"
            rel="noreferrer noopener"
          >
            Software Development
          </Link>{" "}
          Intern @
          <Link
            href="https://www.blackberry.com/us/en"
            onClick={preventDefault}
            className={css.thing}
            target="_blank"
            rel="noreferrer noopener"
          >
            BlackBerry
          </Link>
          . My interests include Web Development, Embedded Software, Mobile
          Development, Cyber Security and the Cloud.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Currently looking for full-time Co-op or New Graduate opportunities.
        </Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        <SocialLinks />
      </Grid>
    </Grid>
  );
};

export default Home;
