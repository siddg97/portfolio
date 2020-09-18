import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, makeStyles, Paper, Chip } from "@material-ui/core";
import Charts from "./GhCharts.js";
import { Loading } from "../../common";

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
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [starData, setStarData] = useState(null);

  const initUserData = () => {
    (async () => {
      try {
        // Get user data
        var res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user`);
        let user = await res.data;
        setUserData(user);
      } catch (err) {
        console.log(err.message);
        setUserData(null);
      }
    })();
  };

  const initLangData = () => {
    (async function () {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/user/lang-stats`
        );
        let response = await res.data;
        const langChartData = response.langStats;
        setLangData(langChartData);
      } catch (err) {
        console.log(err.message);
        setLangData(null);
      }
    })();
  };

  const initRepoData = () => {
    (async function () {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/user/top-repos`
        );
        const response = await res.data;
        const repoChartData = response.topRepos;
        setRepoData(repoChartData);
      } catch (err) {
        console.log(err.message);
        setRepoData(null);
      }
    })();
  };

  const initStarData = () => {
    (async function () {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/user/lang-stars`
        );
        const response = await res.data;
        const starChartData = response.langStars;
        setStarData(starChartData);
      } catch (err) {
        console.log(err.message);
        setStarData(null);
      }
    })();
  };

  useEffect(() => {
    initUserData();
    initLangData();
    initRepoData();
    initStarData();
  }, []);

  return (
    <Grid container spacing={1} justify="center" alignItems="center">
      {userData && langData && repoData && starData ? (
        <Charts
          user={userData}
          langData={langData}
          repoData={repoData}
          starData={starData}
        />
      ) : (
        <Loading />
      )}
    </Grid>
  );
};

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
