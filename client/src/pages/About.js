import React, { Fragment } from "react";
import {
  Avatar,
  Grid,
  Typography,
  makeStyles,
  Chip,
  Link,
} from "@material-ui/core";

const facts = [
  {
    title: "Find me on",
    content: [
      ["LinkedIn", "https://www.linkedin.com/in/siddg97/"],
      ["Github", "https://github.com/siddg97"],
      ["Stack Overflow", "https://stackoverflow.com/story/sg97"],
    ],
    color: "primary",
  },
  {
    title: "Places I've lived",
    content: [
      ["Vancouver", "https://en.wikipedia.org/wiki/Vancouver"],
      ["Tehran", "https://en.wikipedia.org/wiki/Tehran"],
      ["Delhi", "https://en.wikipedia.org/wiki/Delhi"],
    ],
    color: "secondary",
  },
];

const useStyles = makeStyles((theme) => ({
  gridItem: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(3),
    },
  },
  thing: {
    color: theme.palette.custom.date,
  },
  chip: {
    margin: theme.spacing(1),
  },
  itemHeader: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const workExp = {
  position: "Software Development Intern",
  company: "Blackberry",
  location: "Burnaby, BC",
  start: "Jan 2020",
  end: "Aug 2020",
  accomplishments: [
    " - Developed standalone programs in C and Python for acoustic analysis",
    " - Optimized existing tools in codebase to achieve over 40% faster computations",
    " - Devised test scripts to validate voice detection in audio",
    " - Resolved over 150+ tickets under 8 months",
    " - Completed internal training programs for the QNX Neutrino RTOS",
  ],
};

const WorkExp = (props) => {
  const { position, company, start, end, accomplishments, location } = props;
  return (
    <Fragment>
      <Typography variant="body1">
        I recently worked as a {position} @{company}
      </Typography>
      <Typography variant="body1" gutterBottom color="secondary">
        {start} - {end} | {location}
      </Typography>
      {accomplishments.map((acc) => (
        <Typography key={acc} variant="body1" gutterBottom>
          {acc}
        </Typography>
      ))}
    </Fragment>
  );
};

const FactSection = (props) => {
  const classes = useStyles();
  const { title, content, color } = props;
  return (
    <Grid item xs={12} md={5}>
      <Typography
        className={classes.itemHeader}
        variant="h5"
        color={color}
        gutterBottom
      >
        {title}
      </Typography>
      {content.map((c) => (
        <Chip
          key={c[1]}
          component="a"
          label={<Typography variant="body1">{c[0]}</Typography>}
          color={color}
          className={classes.chip}
          href={c[1]}
          target="_blank"
          clickable
          rel="noopener noreferrer"
        />
      ))}
    </Grid>
  );
};

const About = (props) => {
  const css = useStyles();
  const preventDefault = (e) => e.preventDefault();
  return (
    <Grid container spacing={3} justify="center" alignItems="flex-start">
      <Grid item xs={12} md={10}>
        <Typography variant="h2" color="primary" className={css.gridItem}>
          About Me
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
          Hello! I'm Siddharth, a software engineer and developer in the{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Greater_Vancouver"
            onClick={preventDefault}
            className={css.thing}
            target="_blank"
            rel="noreferrer noopener"
          >
            Greater Vancouver Area, BC, Canada
          </Link>
          . I enjoy building things like websites, applications and everything
          in between. I constantly strive to apply my problem-solving skills
          into software I develop and have a knack for high quality code. I'm
          currently in the final year of studies for my Bachelors in Computing
          Sciences at{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Simon_Fraser_University"
            onClick={preventDefault}
            className={css.thing}
            target="_blank"
            rel="noreferrer noopener"
          >
            Simon Fraser University, Burnaby
          </Link>
          . My expected graduation date is{" "}
          <Link
            href="https://www.timeanddate.com/calendar/monthly.html?year=2021&month=6&country=27"
            onClick={preventDefault}
            className={css.thing}
            target="_blank"
            rel="noreferrer noopener"
          >
            June, 2021
          </Link>
          .
        </Typography>
        <br />
        <WorkExp {...workExp} />
      </Grid>
      <Grid item xs={12} md={4}>
        <center>
          <Avatar
            src={`${process.env.REACT_APP_SERVER_URL}/assets/me.jpg`}
            alt="Siddharth Gupta"
            className={css.avatar}
          />
        </center>
      </Grid>
      {facts.map((fact, i) => (
        <FactSection key={i} {...fact} />
      ))}
    </Grid>
  );
};

export default About;
