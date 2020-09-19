import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Chip,
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
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
  },
  tag: {
    margin: theme.spacing(0.5),
  },
}));

const ProjectCard = (props) => {
  const { name, description, tags } = props;
  const cardStyle = useStyles();
  return (
    <Card classes={{ root: cardStyle.root }}>
      <CardHeader title={name} />
      <CardContent classes={{ root: cardStyle.content }}>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {tags.map((t, i) => (
          <Chip
            variant="outlined"
            key={`${i}-${t}-tag`}
            className={cardStyle.tag}
            label={t}
            color="secondary"
          />
        ))}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
