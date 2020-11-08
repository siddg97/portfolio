import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    content: {
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    },
}));

const ChartCard = (props) => {
    const { chart, title } = props;
    const cardStyle = useStyles();
    return (
        <Card>
            <CardHeader title={title} />
            <CardContent className={cardStyle.content}>{chart}</CardContent>
        </Card>
    );
};

ChartCard.propTypes = {
    chart: PropTypes.element.isRequired,
    title: PropTypes.element.isRequired,
};

export default ChartCard;
