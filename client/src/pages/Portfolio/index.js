import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import GithubProfile from "./github";
import Projects from "./projects";

// const skills = [
//   "C",
//   "C++",
//   "JavaScript",
//   "NodeJS",
//   "Python",
//   "R",
//   "React",
//   "Redux",
//   "Express",
//   "Flask",
//   "SQL",
//   "MongoDB",
//   "Firebase",
//   "Git",
//   "Subversion",
//   "Docker",
//   "GNU/Linux",
//   "Windows",
//   "Postman",
//   "Heroku",
//   "Google Cloud Platform",
//   "Visual Studio",
//   "JIRA",
// ];

const useStyles = makeStyles((theme) => ({
    firstGridItem: {
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

const Portfolio = (props) => {
    const css = useStyles();
    return (
        <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} md={10} className={css.firsGridItem}>
                <Projects />
            </Grid>
            <Grid item xs={12} md={10}>
                <GithubProfile />
            </Grid>
        </Grid>
    );
};

export default Portfolio;
