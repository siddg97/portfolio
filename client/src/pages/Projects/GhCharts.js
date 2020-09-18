import React, { useEffect } from "react";
import buildChart from "./utils.js";
import { Grid } from "@material-ui/core";

import ChartCard from "./ChartCard.js";
import GhCard from "./GhCard.js";

const Charts = (props) => {
  const { user, langData, repoData, starData } = props;

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
    const labels = repoData.map((repo) => repo.name);
    const data = repoData.map((repo) => repo.stargazers_count);
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
    initLangChart();
    initRepoChart();
    initStarChart();
  });

  const chartSize = 250;
  return (
    <Grid item xs={12}>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <GhCard user={user} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ChartCard
            title="Top Languages"
            chart={
              <canvas id="langChart" width={chartSize} height={chartSize} />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ChartCard
            title="Most Starred"
            chart={
              <canvas id="starChart" width={chartSize} height={chartSize} />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
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

export default Charts;
