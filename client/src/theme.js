import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    // primary: {
    //   main: "#d72483",
    // },
    // secondary: {
    //   main: "#14213d",
    // },
  },
});

theme = responsiveFontSizes(theme);

const Themer = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Themer;
