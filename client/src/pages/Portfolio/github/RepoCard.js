import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Chip,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  content: {
    flexGrow: 1,
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  },
  stats: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  },
  statItem: {
    margin: theme.spacing(0.5),
  },
  statGap: {
    flexGrow: 1,
  },
}));

const RepoCard = (props) => {
  const {
    name,
    description,
    html_url,
    stargazers_count,
    forks_count,
    size,
    color,
    language,
  } = props;
  const cardStyles = useStyles();
  return (
    <Card classes={{ root: cardStyles.root }}>
      <CardHeader title={name} />
      <CardContent classes={{ root: cardStyles.content }}>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        {/*  */}
      </CardContent>
      <CardActions
        disableSpacing
        classes={{
          root: cardStyles.stats,
        }}
      >
        <Chip
          label={language}
          style={{ color: "#fff", backgroundColor: color }}
          className={cardStyles.statItem}
        />
        <Chip
          label={`${stargazers_count} ${
            stargazers_count !== 1 ? "Stars" : "Star"
          }`}
          variant="filled"
          color="primary"
          className={cardStyles.statItem}
        />
        <div className={cardStyles.statGap} />
        <Typography
          variant="button"
          className={cardStyles.statItem}
        >{`${size} KB`}</Typography>
      </CardActions>
    </Card>
  );
};

export default RepoCard;
