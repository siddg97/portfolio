import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Chip,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

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
    // forks_count,
    size,
    language,
  } = props;
  const cardStyles = useStyles();
  return (
    <Card classes={{ root: cardStyles.root }}>
      <CardHeader
        title={name}
        action={
          <IconButton
            color="secondary"
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <OpenInNewIcon />
          </IconButton>
        }
      />
      <CardContent classes={{ root: cardStyles.content }}>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        classes={{
          root: cardStyles.stats,
        }}
      >
        <Chip
          label={language}
          color="secondary"
          variant="outlined"
          className={cardStyles.statItem}
        />
        <Chip
          label={`${stargazers_count} ${
            stargazers_count !== 1 ? "Stars" : "Star"
          }`}
          color="secondary"
          variant="outlined"
          className={cardStyles.statItem}
        />
        <div className={cardStyles.statGap} />
        <Chip
          label={`${size} KB`}
          color="secondary"
          variant="outlined"
          className={cardStyles.statItem}
        />
      </CardActions>
    </Card>
  );
};

export default RepoCard;
