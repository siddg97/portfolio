import React from "react";
import { Grid, Typography, makeStyles, Chip, Link } from "@material-ui/core";

const facts = [
  {
    title: "Places I've Lived",
    content: [
      ["Vancouver", "https://en.wikipedia.org/wiki/Vancouver"],
      ["Tehran", "https://en.wikipedia.org/wiki/Tehran"],
      ["Delhi", "https://en.wikipedia.org/wiki/Delhi"],
    ],
    color: "primary",
  },
  {
    title: "Social Media",
    content: [
      ["LinkedIn", "https://www.linkedin.com/in/siddg97/"],
      ["Github", "https://github.com/siddg97"],
      ["Stack Overflow", "https://stackoverflow.com/story/sg97"],
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
}));

const FactSection = (props) => {
  const classes = useStyles();
  const { title, content, color } = props;
  return (
    <Grid item xs={12} md={5}>
      <Typography variant="h5" color={color} gutterBottom>
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
    <Grid container spacing={3} justify="center" alignItems="center">
      <Grid item xs={12} md={10}>
        <Typography variant="h1" color="primary" className={css.gridItem}>
          About Me
        </Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        <Typography variant="h6" color="textSecondary" gutterBottom>
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
          into the software I create and have a knack for high quality code. I'm
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
          . I have recently completed a 8-month co-op term working at{" "}
          <Link
            href="https://www.blackberry.com/us/en"
            onClick={preventDefault}
            className={css.thing}
            target="_blank"
            rel="noreferrer noopener"
          >
            BlackBerry
          </Link>
          , as a{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Software_development"
            onClick={preventDefault}
            className={css.thing}
            target="_blank"
            rel="noreferrer noopener"
          >
            Software Development
          </Link>{" "}
          Intern in{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Burnaby"
            onClick={preventDefault}
            className={css.thing}
            target="_blank"
            rel="noreferrer noopener"
          >
            Burnaby, BC, Canada
          </Link>
          .
        </Typography>
      </Grid>
      {facts.map((fact, i) => (
        <FactSection key={i} {...fact} />
      ))}
      <Grid item xs={12} md={10}>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Thanks for visiting my corner of the internet!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
