import React from "react";
import PropTypes from "prop-types";

const HyperLink = (props) => {
    const { url, className, color, children } = props;
    return (
        <a
            href={url}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                color: color ? color : "#FCA311",
            }}
        >
            {children}
        </a>
    );
};

HyperLink.propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.any,
};

export default HyperLink;
