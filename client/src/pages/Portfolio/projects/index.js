import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(3),
  },
}));

const projects = [
  {
    name: "UniFYI",
    tags: ["React", "MongoDB", "Flask"],
    description:
      "A full-stack web app with the primary focus on improving university experiences for new and existing university students. Frontend built with React, backend with flask. Additionally uses mongoDB as document-store and firebase for authentication.",
  },
  {
    name: "Online Booking System",
    tags: ["React", "Flask", "Firebase"],
    description:
      "An online scheduling system for booking appointments for nails salons. Frontend made with react, backend utilizes the flask framework and firebase as database. Deployed on google app engine and utilizes socket programming for pushing realtime updates.",
  },
  {
    name: "BugDB",
    tags: ["React", "Express", "MongoDB"],
    description:
      "A full-stack web application to store and track bugs encountered during software development. Built using react and express. MongoDB used as database.",
  },
  {
    name: "Easy Terms",
    tags: ["React", "Flask", "NLP"],
    description:
      "A web application that summarizes long terms and agreements into a few key points using the word-rank algorithm. Built using react, flask and nltk pip package.",
  },
  {
    name: "TrackIT",
    tags: ["Swift", "SQL", "REST"],
    description:
      "An iOS application focused on providing a simple way to track their DASH diet on a meal-to-meal basis. Providing personalized suggestions and analysis of users diet.",
  },
];

const Projects = (props) => {
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
            Selected Projects
          </Typography>
        </Grid>
        {projects.map((p) => (
          <Grid key={p.name} item xs={12} sm={6} lg={4}>
            <ProjectCard {...p} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;
