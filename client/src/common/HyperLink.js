import React from "react";

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

export default HyperLink;
