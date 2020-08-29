import React from "react";
import { Grid, Typography, IconButton, makeStyles } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    [theme.breakpoints.up("md")]: {
      marginTop: "20vh",
    },
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
        <Typography variant="h6" color="textSecondary" gutterBottom>
          I am a software engineer and developer based in the Greater Vancouver
          Area. Previously Software Development Intern @Blackberry/QNX. My
          interests include Web Development, Embedded Software, Mobile
          Development, Cyber Security and the Cloud.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Currently looking for full-time Co-op or New Graduate opportunities.
        </Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Home;
