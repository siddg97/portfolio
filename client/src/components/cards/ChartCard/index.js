import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { LoadingIndicator } from 'components/common/LoadingIndicator/index';
import { useTheme } from '@material-ui/core/styles';
import { getAxesColor, getChartFontColor } from 'utils/chart_utils';
import GridN from 'components/layout/GridN/index';

const useStyles = makeStyles(({ spacing }) => ({
    content: {
        padding: `${spacing(2)} ${spacing(3)}`,
    },
    card: {
        borderRadius: spacing(2),
        height: '100%',
    },
}));

const ChartCard = (props) => {
    const cardStyle = useStyles();
    const [chartObj, setChartObj] = useState({});
    const { title, status, chartData, chartFn, chartId } = props;
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

    const content = (
        <>
            {status === 'loading' && (
                <center>
                    <LoadingIndicator />
                </center>
            )}
            <CardContent className={cardStyle.content}>
                <canvas id={chartId} />
            </CardContent>
        </>
    );
    const header = <CardHeader title={title} />;
    return (
        <Card elevation={0} classes={{ root: cardStyle.card }}>
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
