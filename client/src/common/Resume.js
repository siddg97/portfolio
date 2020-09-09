import React from "react";
import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
const Resume = (props) => {
  const { size } = props;
  return (
    <Button
      color="primary"
      variant="outlined"
      href="https://docs.google.com/document/d/1LAapr1PCYuXhAowhTx3IDkeNga-KsrPwkD-Uloenaso/edit?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      size={size ? size : "medium"}
      startIcon={<DescriptionIcon />}
      fullWidth
    >
      Download Resume
    </Button>
  );
};

export default Resume;
