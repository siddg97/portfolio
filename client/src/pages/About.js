import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const factCards = [
  {
    title: "Places I've Lived",
    content: [
      ["Vancouver", "https://en.wikipedia.org/wiki/Vancouver"],
      ["Colombo", "https://en.wikipedia.org/wiki/Colombo"],
      ["Tehran", "https://en.wikipedia.org/wiki/Tehran"],
      ["Delhi", "https://en.wikipedia.org/wiki/Delhi"],
    ],
  },
  {
    title: "Social Media",
    content: [
      ["LinkedIn", "https://www.linkedin.com/in/siddg97/"],
      ["Github", "https://github.com/siddg97"],
      ["Facebook", "https://www.facebook.com/siddg97/"],
      ["Stack Overflow", "https://stackoverflow.com/story/sg97"],
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  gridItem: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(3),
    },
  },
  place: {
    color: theme.palette.custom.location,
  },
  date: {
    color: theme.palette.custom.date,
  },
  thing: {
    color: theme.palette.custom.entity,
  },
}));

const FactCard = (props) => {
  const { title, content } = props;
  const preventDefault = (e) => e.preventDefault();
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <List>
          {content.map((c) => (
            <ListItem key={c[0]}>
              <ListItemText>
                <Link
                  href={c[1]}
                  onClick={preventDefault}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Typography variant="h5">{c[0]}</Typography>
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const About = (props) => {
  const css = useStyles();
  const preventDefault = (e) => e.preventDefault();
  return (
    <Grid container spacing={3} justify="center" alignItems="center">
      <Grid item xs={12} lg={10}>
        <Typography variant="h1" color="primary" className={css.gridItem}>
          About Me
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card>
          <CardMedia
            component="img"
            alt="my img"
            image={`${process.env.REACT_APP_SERVER_URL}/assets/me.jpg`}
          />
        </Card>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Hello! I'm Siddharth, a software engineer and developer rooted in the{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Greater_Vancouver"
            onClick={preventDefault}
            className={css.place}
            target="_blank"
            rel="noreferrer noopener"
          >
            Greater Vancouver Area, BC, Canada
          </Link>
          .
        </Typography>
        <br />
        <Typography variant="h6" color="textSecondary" gutterBottom>
          I enjoy building things, websites, applications and everything in
          between. I constantly strive to apply my problem-solving skills into
          the software I create and have a knack for high quality code.
        </Typography>
        <br />
        <Typography variant="h6" color="textSecondary" gutterBottom>
          I'm currently in the final year of studies for my Bachelors in
          Computing Sciences at{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Simon_Fraser_University"
            onClick={preventDefault}
            className={css.place}
            target="_blank"
            rel="noreferrer noopener"
          >
            Simon Fraser University, Burnaby
          </Link>
          . My expected graduation date is{" "}
          <Link
            href="https://www.timeanddate.com/calendar/monthly.html?year=2021&month=6&country=27"
            onClick={preventDefault}
            className={css.date}
            target="_blank"
            rel="noreferrer noopener"
          >
            June, 2021
          </Link>
          .
        </Typography>
        <br />
        <Typography variant="h6" color="textSecondary" gutterBottom>
          I recently completed a 8-month co-op term working at{" "}
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
            className={css.place}
            target="_blank"
            rel="noreferrer noopener"
          >
            Burnaby, BC, Canada
          </Link>
          .
        </Typography>
        <br />
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Thanks for visiting my corner of the internet!
        </Typography>
      </Grid>
      {factCards.map((fc) => (
        <Grid item xs={12} sm={5} key={fc.title}>
          <FactCard {...fc} />
        </Grid>
      ))}
    </Grid>
  );
};

export default About;
