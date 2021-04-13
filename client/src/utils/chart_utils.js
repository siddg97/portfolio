import Chart from 'chart.js';

const buildAxes = (axes, themeType) => {
    const scales = {
        xAxes: [
            {
                ticks: {
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontSize: 13,
                    fontColor: getChartFontColor(themeType),
                },
                gridLines: {
                    color: getAxesColor(themeType),
                },
            },
        ],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontSize: 13,
                    fontColor: getChartFontColor(themeType),
                },
                gridLines: {
                    color: getAxesColor(themeType),
                },
            },
        ],
    };

    return axes ? scales : null;
};

const buildLegend = (legend, themeType) => {
    const leg = {
        position: 'right',
        labels: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontColor: getChartFontColor(themeType),
        },
    };
    return legend ? leg : null;
};

const buildChart = (config, themeType) => {
    const {
        ctx,
        chartType,
        labels,
        data,
        backgroundColor,
        borderColor,
        axes,
        legend,
    } = config;

    return new Chart(ctx, {
        type: chartType,
        responsive: true,
        maintainAspectRatio: false,
        data: {
            labels,
            datasets: [
                {
                    data,
                    backgroundColor,
                    borderColor,
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: buildAxes(axes, themeType),
            legend: buildLegend(legend, themeType),
            tooltips: {
                titleFontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                bodyFontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                cornerRadius: 3,
            },
        },
    });
};

const baseChartConfig = {
    backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(158, 42, 43, 0.5)',
        'rgba(51, 92, 103, 0.5)',
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(158, 42, 43, 1)',
        'rgba(51, 92, 103, 1)',
    ],
    chartType: 'bar',
    axes: true,
    legend: false,
};

export const initLangChart = (data, themeType, chartId) => {
    const ctx = document.getElementById(chartId);
    const langs = data.filter(
        ({ label }) => !['Others', 'R', 'Makefile', 'Haskell', 'Scheme'].includes(label)
    );
    const labels = langs.map((lang) => lang.label);
    if (langs.length > 0) {
        const config = {
            ...baseChartConfig,
            ctx,
            labels,
            data: langs.map((lang) => lang.value),
        };
        return buildChart(config, themeType);
    }
};

export const initRepoChart = (data, themeType, chartId) => {
    const ctx = document.getElementById(chartId);
    const topRepos = data.slice(0, 5);
    const labels = topRepos.map((repo) => repo.name);
    if (topRepos.length > 0) {
        const config = {
            ...baseChartConfig,
            ctx,
            labels,
            data: topRepos.map((repo) => repo.stargazers_count),
        };
        return buildChart(config, themeType);
    }
};

export const initStarChart = (data, themeType, chartId) => {
    const ctx = document.getElementById(chartId);
    const stars = data.filter(
        ({ label }) => !['Others', 'R', 'Makefile', 'Haskell', 'Scheme'].includes(label)
    );
    const labels = stars.map((l) => l.label);
    if (stars.length > 0) {
        const config = {
            ...baseChartConfig,
            ctx,
            labels,
            data: stars.map((l) => l.value),
        };
        return buildChart(config, themeType);
    }
};

export const getChartFontColor = (themeType) => (themeType === 'dark' ? '#fff' : '#000');

export const getAxesColor = (themeType) =>
    themeType === 'dark' ? 'rgba(255,255,255, 0.5)' : 'rgba(0,0,0, 0.5)';
