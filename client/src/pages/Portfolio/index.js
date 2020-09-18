import React from "react";
import { Grid, Typography, makeStyles, Paper, Chip } from "@material-ui/core";
import GithubProfile from "./github";

const skills = [
  "C",
  "C++",
  "JavaScript",
  "NodeJS",
  "Python",
  "R",
  "React",
  "Redux",
  "Express",
  "Flask",
  "SQL",
  "MongoDB",
  "Firebase",
  "Git",
  "Subversion",
  "Docker",
  "GNU/Linux",
  "Windows",
  "Postman",
  "Heroku",
  "Google Cloud Platform",
  "Visual Studio",
  "JIRA",
];
const otherSkills = [
  "Critical Thinking",
  "Communication Skills",
  "Algorithms",
  "Data Structures",
  "Enthusiasm",
  "Problem Solver",
];
const projects = [
  {
    name: "UniFYI",
    start: "March 2020",
    end: "Present",
    tags: ["React", "MongoDB", "Flask", "GCP", "bit", "Postman", "Firebase"],
    description:
      "A full-stack web app with the primary focus on improving university experiences for new and existing university students",
  },
  {
    name: "Online Booking System",
    start: "May 2020",
    end: "June 2020",
    tags: ["React", "Flask", "Firebase", "SocketIO", "GCP"],
    description:
      "An online scheduling system for booking appointments for nails salons",
  },
  // {
  //   name: "",
  //   start: "",
  //   end: "",
  //   tags: [],
  //   description: "",
  // },
];

const useStyles = makeStyles((theme) => ({
  gridItem: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(3),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(1),
  },
  otherSkillsChip: {
    backgroundColor: theme.palette.custom.location,
  },
  projectTag: {
    backgroundColor: theme.palette.custom.tag,
    margin: theme.spacing(1),
  },
  educationTag: {
    backgroundColor: theme.palette.custom.tag,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Item = (props) => (
  <Paper className={props.paperStyle}>
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} md={3}>
        <Typography variant="h4">{props.title}</Typography>
      </Grid>
      <Grid item xs={12} md={9}>
        {props.children}
      </Grid>
    </Grid>
  </Paper>
);

const Portfolio = (props) => {
  const css = useStyles();
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} md={10}>
        <Typography variant="h2" color="primary" className={css.gridItem}>
          Portfolio
        </Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        <GithubProfile />
      </Grid>
      {/* Skills */}
      <Grid item xs={12} md={10}>
        <Item title="Skills" paperStyle={css.paper}>
          {skills.map((s) => (
            <Chip
              key={s}
              label={<Typography variant="button">{s}</Typography>}
              color="primary"
              className={css.chip}
            />
          ))}
        </Item>
      </Grid>
      {/* Other Skills */}
      <Grid item xs={12} md={10}>
        <Item title="Other Skills" paperStyle={css.paper}>
          {otherSkills.map((os) => (
            <Chip
              key={os}
              label={<Typography variant="button">{os}</Typography>}
              color="secondary"
              className={css.chip}
            />
          ))}
        </Item>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
