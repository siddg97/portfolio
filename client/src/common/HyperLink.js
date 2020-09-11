import React from "react";
import { Link } from "@material-ui/core";

const HyperLink = (props) => {
  const { url, className, children } = props;
  const pd = (event) => event.preventDefault();
  return (
    <Link
      href={url}
      onClick={pd}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};

export default HyperLink;
