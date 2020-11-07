import Chart from "chart.js";

const buildAxes = (axes) => {
    const scales = {
        xAxes: [
            {
                ticks: {
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontSize: 13,
                    fontColor: "#fff",
                },
                gridLines: {
                    color: "rgba(255,255,255, 0.5)",
                },
            },
        ],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontSize: 13,
                    fontColor: "#fff",
                },
                gridLines: {
                    color: "rgba(255,255,255, 0.5)",
                },
            },
        ],
    };

    return axes ? scales : null;
};

const buildLegend = (legend) => {
    const leg = {
        position: "right",
        labels: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontColor: "#fff",
        },
    };
    return legend ? leg : null;
};

const buildChart = (config) => {
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
            scales: buildAxes(axes),
            legend: buildLegend(legend),
            tooltips: {
                titleFontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                bodyFontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                cornerRadius: 3,
            },
        },
    });
};

export default buildChart;
