import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FCA311",
    },
    secondary: {
      main: "#F7263B",
    },
    background: {
      default: "#14213D",
      paper: "#141414",
      input: "#0A111F",
    },
    custom: {
      date: "#62BE37",
      linkedin: "#0e76a8",
      github: "#333",
      tag: "#DC4141",
      resume: "#06d6a0",
    },
  },
  overrides: {
    MuiCard: {
      root: {
        maxWidth: 500,
        borderRadius: 20,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const Themer = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Themer;
