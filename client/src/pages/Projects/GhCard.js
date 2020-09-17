import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Card, CardHeader, CardContent } from "@material-ui/core";
import { HyperLink } from "../../common";
import buildChart from "./utils";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  },
}));

const GhCard = (props) => {
  const { user } = props;
  const cardStyle = useStyles();

  const initGhChart = () => {
    const ctx = document.getElementById("ghStatChart");
    const labels = ["Repositories", "Followers", "Following"];
    const data = [user.public_repos, user.followers, user.following];
    const backgroundColor = [
      "rgba(239, 71, 111,0.7)",
      "rgba(6, 214, 160, 0.7)",
      "rgba(17, 138, 178, 0.7)",
    ];
    const borderColor = [
      "rgba(239, 71, 111,1)",
      "rgba(6, 214, 160, 1)",
      "rgba(17, 138, 178, 1)",
    ];
    const chartType = "doughnut";
    const axes = false;
    const legend = true;
    const config = {
      ctx,
      chartType,
      labels,
      data,
      backgroundColor,
      borderColor,
      axes,
      legend,
    };
    buildChart(config);
  };
  useEffect(() => {
    if (user) {
      initGhChart();
    }
  }, [user]);
  const chartSize = 250;

  return (
    user && (
      <Card>
        <CardHeader
          title={
            <HyperLink url={user.html_url} color="default">
              Github @{user.login}
            </HyperLink>
          }
        />
        <CardContent className={cardStyle.content}>
          <canvas id="ghStatChart" width={chartSize} height={chartSize} />
        </CardContent>
      </Card>
    )
  );
};

export default GhCard;
