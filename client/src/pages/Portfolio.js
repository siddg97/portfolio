import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Avatar,
  Typography,
  makeStyles,
  Paper,
  Chip,
} from "@material-ui/core";
import { HyperLink } from "../common";

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
  ghAvatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: "5px solid " + theme.palette.primary.main,
    margin: "0 auto",
  },
  ghStat: {
    backgroundColor: "rgba(81,83,85, 0.4)",
    padding: theme.spacing(1),
    display: "inline-block",
    margin: theme.spacing(0.25),
    width: "100%",
  },
}));

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
        <Grid container spacing={1} alignItems="center">
          {/* Avatar/Name/handle */}
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Github Avatar"
              component={HyperLink}
              src={userData.avatar_url}
              className={css.ghAvatar}
              url={userData.html_url}
            />
          </Grid>
          {/* Stats */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <Typography component="center" variant="h5">
                  <HyperLink url={userData.html_url}>
                    @{userData.login}
                  </HyperLink>
                </Typography>
              </Grid>
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
      </Grid>
    )
  );
};

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
    tags: ["Firebase", "Flask", "React", "SocketIO", "GCP"],
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

// const ProjectCard = props => {
//   const { projects } = props;
//   return (

//   )
// }

const Portfolio = (props) => {
  const css = useStyles();
  return (
    <Grid container spacing={2} justify="center" alignItems="flex-start">
      <Grid item xs={12} md={10}>
        <Typography variant="h2" color="primary" className={css.gridItem}>
          Github Profile
        </Typography>
      </Grid>
      <GithubProfile css={css} />
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
