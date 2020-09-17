import React, { useEffect, Fragment } from "react";
import buildChart from "./utils.js";
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";

import ChartCard from "./ChartCard.js";
import GhCard from "./GhCard.js";

const Charts = (props) => {
  const { user } = props;
  const initLangChart = () => {
    (async function () {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/user/lang-stats`
        );
        let response = await res.data;
        const langChartData = response.langStats;
        const ctx = document.getElementById("langChart");
        const labels = langChartData.map((lang) => lang.label);
        const data = langChartData.map((lang) => lang.value);
        if (data.length > 0) {
          const backgroundColor = langChartData.map(
            ({ color }) =>
              `#${
                color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)
              }B3`
          );
          const borderColor = langChartData.map((lang) => `${lang.color}`);
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
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  const initStarChart = () => {
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
    (async function () {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/user/top-repos`
        );
        const response = await res.data;
        const starChartData = response.topRepos;
        const ctx = document.getElementById("starChart");
        const labels = starChartData.map((repo) => repo.name);
        const data = starChartData.map((repo) => repo.stargazers_count);
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
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  const initLangStarChart = () => {
    (async function () {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/user/lang-stars`
        );
        const response = await res.data;
        const langStarData = response.langStars;
        const ctx = document.getElementById("langStarChart");
        const labels = langStarData.map((l) => l.label);
        const data = langStarData.map((l) => l.value);
        if (data.length > 0) {
          const chartType = "doughnut";
          const axes = false;
          const legend = true;
          const borderColor = langStarData.map((l) => l.color);
          const backgroundColor = langStarData.map((l) => `${l.color}B3`);
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
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  useEffect(() => {
    initLangChart();
    initStarChart();
    initLangStarChart();
  }, []);

  const chartSize = 250;
  return (
    <Grid item xs={12}>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <GhCard user={user} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ChartCard
            title="Top Languages"
            chart={
              <canvas id="langChart" width={chartSize} height={chartSize} />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ChartCard
            title="Most Starred"
            chart={
              <canvas id="starChart" width={chartSize} height={chartSize} />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
