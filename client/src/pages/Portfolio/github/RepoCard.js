import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Chip,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const RepoCard = (props) => {
  return (
    <Card>
      <CardHeader title="This is a repo card" />
    </Card>
  );
};

export default RepoCard;
