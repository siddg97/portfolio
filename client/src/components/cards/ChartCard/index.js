import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { getAxesColor, getChartFontColor } from 'utils/chart_utils';
import GridN from 'components/layout/GridN/index';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(({ spacing }) => ({
    content: {
        padding: spacing(2),
        paddingTop: 0,
    },
    card: {
        height: '100%',
    },
    skeleton: {
        height: 270,
    },
}));

const ChartCard = ({ title, status, chartData, chartFn, chartId }) => {
    const [chartObj, setChartObj] = useState({});

    const classes = useStyles();
    const {
        palette: { type: themeType },
    } = useTheme();

    useEffect(() => {
        if (status !== 'loading') {
            setChartObj(chartFn(chartData, themeType, chartId));
        }
    }, [status]);

    useEffect(() => {
        if (status !== 'loading' && chartObj.options) {
            const chartFontColor = getChartFontColor(themeType);
            const axesColor = getAxesColor(themeType);
            if (chartObj.options?.scales?.xAxes?.length) {
                chartObj.options.scales.xAxes[0].gridLines.color = axesColor;
                chartObj.options.scales.xAxes[0].ticks.fontColor = chartFontColor;
            }
            if (chartObj.options?.scales?.yAxes?.length) {
                chartObj.options.scales.yAxes[0].gridLines.color = axesColor;
                chartObj.options.scales.yAxes[0].ticks.fontColor = chartFontColor;
            }

            if (chartObj.options?.legend) {
                chartObj.options.legend.labels.fontColor = chartFontColor;
            }
            chartObj.update();
        }
    }, [themeType]);
    const chartSize = 256;
    const content =
        status === 'loading' ? (
            <Skeleton animation='wave' variant='rect' className={classes.skeleton} />
        ) : (
            <CardContent classes={{ root: classes.content }}>
                <canvas id={chartId} width={chartSize} height={chartSize} />
            </CardContent>
        );
    const header = <CardHeader title={title} />;
    return (
        <Card variant='outlined' elevation={0} classes={{ root: classes.card }}>
            <GridN>
                {header}
                {content}
            </GridN>
        </Card>
    );
};

ChartCard.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    chartData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    chartId: PropTypes.string.isRequired,
    chartFn: PropTypes.func.isRequired,
};

ChartCard.defaultProps = {
    chartData: [],
};

export default ChartCard;
