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

export const initUserChart = (data, themeType, chartId) => {
    const ctx = document.getElementById(chartId);
    const labels = ['Repositories', 'Followers', 'Following'];
    const { public_repos, followers, following } = data;
    const backgroundColor = [
        'rgba(239, 71, 111,0.5)',
        'rgba(6, 214, 160, 0.5)',
        'rgba(17, 138, 178, 0.5)',
    ];
    const borderColor = [
        'rgba(239, 71, 111,1)',
        'rgba(6, 214, 160, 1)',
        'rgba(17, 138, 178, 1)',
    ];

    const chartType = 'doughnut';
    const axes = false;
    const legend = true;
    const config = {
        ctx,
        chartType,
        labels,
        data: [public_repos, followers, following],
        backgroundColor,
        borderColor,
        axes,
        legend,
    };
    return buildChart(config, themeType);
};

export const initLangChart = (data, themeType, chartId) => {
    const ctx = document.getElementById(chartId);
    const labels = data.map((lang) => lang.label);
    if (data.length > 0) {
        const backgroundColor = data.map(
            ({ color }) =>
                `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`
        );
        const borderColor = data.map((lang) => `${lang.color}`);
        const chartType = 'doughnut';
        const axes = false;
        const legend = true;
        const config = {
            ctx,
            chartType,
            labels,
            data: data.map((lang) => lang.value),
            backgroundColor,
            borderColor,
            axes,
            legend,
        };
        return buildChart(config, themeType);
    }
};

export const initRepoChart = (data, themeType, chartId) => {
    const backgroundColor = [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(158, 42, 43, 0.5)',
        'rgba(51, 92, 103, 0.5)',
    ];
    const borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(158, 42, 43, 1)',
        'rgba(51, 92, 103, 1)',
    ];
    const ctx = document.getElementById(chartId);
    const topRepos = data.slice(0, 5);
    const labels = topRepos.map((repo) => repo.name);
    if (topRepos.length > 0) {
        const chartType = 'bar';
        const axes = true;
        const legend = false;
        const config = {
            ctx,
            chartType,
            labels,
            data: topRepos.map((repo) => repo.stargazers_count),
            backgroundColor,
            borderColor,
            axes,
            legend,
        };
        return buildChart(config, themeType);
    }
};

export const initStarChart = (data, themeType, chartId) => {
    const ctx = document.getElementById(chartId);
    const labels = data.map((l) => l.label);
    if (data.length > 0) {
        const chartType = 'doughnut';
        const axes = false;
        const legend = true;
        const borderColor = data.map((l) => l.color);
        const backgroundColor = data.map((l) => `${l.color}B3`);
        const config = {
            ctx,
            chartType,
            labels,
            data: data.map((l) => l.value),
            backgroundColor,
            borderColor,
            axes,
            legend,
        };
        return buildChart(config, themeType);
    }
};

export const getChartFontColor = (themeType) => (themeType === 'dark' ? '#fff' : '#000');
export const getAxesColor = (themeType) =>
    themeType === 'dark' ? 'rgba(255,255,255, 0.5)' : 'rgba(0,0,0, 0.5)';
