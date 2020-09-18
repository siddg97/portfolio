import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { SocialLinks, HyperLink } from "../common";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    [theme.breakpoints.up("md")]: {
      marginTop: "20vh",
    },
  },
  "font-18": {
    fontSize: "18px",
  },
  thing: {
    color: theme.palette.custom.date,
  },
}));

const Home = (props) => {
  const css = useStyles();
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
        <Typography variant="body1" className={css["font-18"]} gutterBottom>
          I am a{" "}
          <HyperLink
            url={"https://en.wikipedia.org/wiki/Software_engineer"}
            className={css.thing}
            color={"#62BE37"}
          >
            Software Engineer
          </HyperLink>{" "}
          based in the{" "}
          <HyperLink
            url={"https://en.wikipedia.org/wiki/Greater_Vancouver"}
            className={css.thing}
            color={"#62BE37"}
          >
            Greater Vancouver Area, BC
          </HyperLink>
          . Previously{" "}
          <HyperLink
            url="https://en.wikipedia.org/wiki/Software_development"
            className={css.thing}
            color={"#62BE37"}
          >
            Software Development
          </HyperLink>{" "}
          Intern{" "}
          <HyperLink
            url="https://www.blackberry.com/us/en"
            className={css.thing}
            color={"#62BE37"}
          >
            @BlackBerry
          </HyperLink>
          . My interests include Web Development, Embedded Software, Mobile
          Development, Cyber Security and the Cloud.
        </Typography>
        <Typography variant="h6" gutterBottom color="primary">
          Currently looking for full-time Co-op or New Graduate opportunities
        </Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        <SocialLinks />
      </Grid>
    </Grid>
  );
};

export default Home;
