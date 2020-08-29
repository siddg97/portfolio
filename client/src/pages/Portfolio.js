import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

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

const skills = [
  "C",
  "C++",
  "JavaScript",
  "NodeJS",
  "Python",
  "R",
  "React",
  "Redux",
  "Flask",
  "Express",
  "MongoDB",
  "Firebase",
  "Git",
  "Subversion",
  "Docker",
  "GNU/Linux",
  "Windows",
  "SQL",
  "NoSQL",
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
const workExp = {
  position: "Software Development Intern",
  company: "Blackberry Ltd.",
  location: "Burnaby, BC, Canada",
  start: "January 2020",
  end: "Aug 2020",
  accomplishments: [
    "Developed standalone programs using C and Python for acoustic analysis",
    "Optimized existing tools in codebase to achieve over 40% performance gains",
    "Devised test scripts to validate voice detection in audio wave files",
    "Developed testing tools for identification of bugs in existing software",
    "Participated extensively in code reviews",
    "Resolved over 150+ tickets under 8 months",
    "Completed internal training programs for the QNX Neutrino RTOS",
  ],
};
const projects = [
  {
    name: "UniFYI",
    start: "March 2020",
    end: "Present",
    tags: ["React", "MongoDB", "Flask", "GCE", "bit", "Postman"],
    accomplishments: [
      "Collaborated in a team of 3 to develop an online forum designed to improves university experiences for students",
      "Assumed full stack developer role, contributing to frontend, backend, database administration",
      "Responsible for managing and monitoring deployments on Google Compute Engine",
      "Developed REST API endpoints with Flask in python",
      "Participated in code reviews extensively",
      "Utilized bit for UI documentation and Postman Docs for aPI documentation",
    ],
  },
  {
    name: "Online Booking System",
    start: "May 2020",
    end: "June 2020",
    tags: ["Firebase", "Flask", "React", "SocketIO", "GAE"],
    accomplishments: [
      "A full stack web application for appointment booking for nail salons",
      "Structured frontend and backend into different services",
      "Developed UI for both customers and salon employees",
      "Utilized Firebase REST API to query database from flask backend",
      "Deployed each service on Google Ap Engine for use in a real-time enviornment",
      "Integrated socketIO on both backend and frontend to send/receive real-time updates",
    ],
  },
  // {
  //   name: "",
  //   start: "",
  //   end: "",
  //   tags: [],
  //   accomplishments: [],
  // },
];

const education = {
  uni: "Simon Fraser University",
  degree: "Bachelors in CS",
  start: "Jan 2018",
  end: "June 2021",
};

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
    <Grid container spacing={2} justify="center" alignItems="flex-start">
      <Grid item xs={12} md={10}>
        <Typography variant="h1" color="primary" className={css.gridItem}>
          Portfolio
        </Typography>
      </Grid>
      {/* Work Experience */}
      <Grid item xs={12} md={10}>
        <Item title="Work Experience" paperStyle={css.paper}>
          <br />
          <Typography
            variant="h5"
            color="primary"
            display="inline"
            gutterBottom
          >
            {workExp.position}
          </Typography>{" "}
          <Typography variant="h5" display="inline" gutterBottom>
            @ {workExp.company}
          </Typography>
          <br />
          <Typography variant="h6" color="secondary">
            {workExp.start} - {workExp.end} | {workExp.location}
          </Typography>
          <List dense disablePadding>
            {workExp.accomplishments.map((acc) => (
              <ListItem dense disableGutters key={acc}>
                <ListItemText>
                  <Typography variant="body1">
                    <ArrowRightAltIcon fontSize="small" /> {acc}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Item>
      </Grid>
      {/* Projects */}
      <Grid item xs={12} md={10}>
        <Item title="Projects" paperStyle={css.paper}>
          {projects.map((p, i) => (
            <React.Fragment key={p.name}>
              <br />
              <Typography variant="h5" color="primary" gutterBottom>
                {p.name}
              </Typography>
              <Typography variant="h6" color="secondary">
                {p.start} - {p.end}
              </Typography>
              <List dense disablePadding>
                {p.accomplishments.map((acc) => (
                  <ListItem dense disableGutters key={acc}>
                    <ListItemText>
                      <Typography variant="body1">
                        <ArrowRightAltIcon fontSize="small" /> {acc}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
              {p.tags.map((t) => (
                <Chip
                  key={p.name + ":" + t}
                  label={<Typography variant="button">{t}</Typography>}
                  className={css.projectTag}
                />
              ))}
              <br />
              <br />
              {i === 0 ? <Divider /> : null}
            </React.Fragment>
          ))}
        </Item>
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
      {/* Education */}
      <Grid item xs={12} md={10}>
        <Item title="Education" paperStyle={css.paper}>
          <br />
          <Typography variant="h5" color="primary">
            {education.uni}{" "}
            <Chip
              label={
                <Typography variant="button">{education.degree}</Typography>
              }
              className={css.educationTag}
            />
          </Typography>
          <Typography variant="h6" color="secondary">
            {education.start} - {education.end}
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
