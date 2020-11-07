import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import RepoCard from "./RepoCard.js";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(3),
  },
}));

const GhRepos = (props) => {
  const { repos } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Grid container justify="flex-start" alignItems="stretch" spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            gutterBottom
            color="primary"
            className={classes.header}
          >
            Popular Repositories
          </Typography>
        </Grid>
        {repos.map((repo) => (
          <Grid item xs={12} sm={6} lg={4} key={repo.html_url}>
            <RepoCard {...repo} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default GhRepos;
