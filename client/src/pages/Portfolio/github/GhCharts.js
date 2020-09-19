import React, { useEffect, Fragment } from "react";
import buildChart from "./chart_utils.js";
import { Grid } from "@material-ui/core";
import ChartCard from "./ChartCard.js";
import { HyperLink } from "../../../common";

const GhCharts = (props) => {
  const { user, langData, repoData, starData } = props;

  const initUserChart = () => {
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

  const initLangChart = () => {
    const ctx = document.getElementById("langChart");
    const labels = langData.map((lang) => lang.label);
    const data = langData.map((lang) => lang.value);
    if (data.length > 0) {
      const backgroundColor = langData.map(
        ({ color }) =>
          `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`
      );
      const borderColor = langData.map((lang) => `${lang.color}`);
      const chartType = "pie";
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
    }
  };

  const initRepoChart = () => {
    const backgroundColor = [
      "rgba(255, 99, 132, 0.7)",
      "rgba(54, 162, 235, 0.7)",
      "rgba(255, 206, 86, 0.7)",
      "rgba(75, 192, 192, 0.7)",
      "rgba(153, 102, 255, 0.7)",
      "rgba(255, 159, 64, 0.7)",
      "rgba(158, 42, 43, 0.7)",
      "rgba(51, 92, 103, 0.7)",
    ];
    const borderColor = [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
      "rgba(158, 42, 43, 1)",
      "rgba(51, 92, 103, 1)",
    ];
    const ctx = document.getElementById("starChart");
    const topRepos = repoData.slice(0, 5);
    const labels = topRepos.map((repo) => repo.name);
    const data = topRepos.map((repo) => repo.stargazers_count);
    if (data.length > 0) {
      const chartType = "bar";
      const axes = true;
      const legend = false;
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
    }
  };

  const initStarChart = () => {
    const ctx = document.getElementById("langStarChart");
    const labels = starData.map((l) => l.label);
    const data = starData.map((l) => l.value);
    if (data.length > 0) {
      const chartType = "doughnut";
      const axes = false;
      const legend = true;
      const borderColor = starData.map((l) => l.color);
      const backgroundColor = starData.map((l) => `${l.color}B3`);
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
    }
  };

  useEffect(() => {
    initUserChart();
    initLangChart();
    initRepoChart();
    initStarChart();
  });

  const chartSize = 250;
  return (
    <Grid item xs={12}>
      <Grid container justify="flex-start" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6} lg={3} xl={2}>
          <ChartCard
            title={
              <Fragment>
                Github{" "}
                <HyperLink url={user.html_url} color="#0e76a8">
                  @{user.login}
                </HyperLink>
              </Fragment>
            }
            chart={
              <canvas id="ghStatChart" width={chartSize} height={chartSize} />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} xl={2}>
          <ChartCard
            title="Top Languages"
            chart={
              <canvas id="langChart" width={chartSize} height={chartSize} />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} xl={2}>
          <ChartCard
            title="Most Starred"
            chart={
              <canvas id="starChart" width={chartSize} height={chartSize} />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} xl={2}>
          <ChartCard
            title="Stars per Language"
            chart={
              <canvas id="langStarChart" width={chartSize} height={chartSize} />
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GhCharts;
