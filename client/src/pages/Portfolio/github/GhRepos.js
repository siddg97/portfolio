import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import RepoCard from "./RepoCard.js";

const GhRepos = (props) => {
  const { repos } = props;
  return (
    <Grid item xs={12}>
      <Grid container justify="flex-start" alignItems="stretch" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom color="primary">
            Top Repositories
          </Typography>
        </Grid>
        {repos.map((repo) => (
          <Grid item xs={12} sm={6} md={4}>
            <RepoCard key={repo.html_url} {...repo} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default GhRepos;
