import React from "react";
import PropTypes from "prop-types";
import {
    createMuiTheme,
    ThemeProvider,
    responsiveFontSizes,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#f48c06",
        },
        secondary: {
            main: "#06d6a0",
        },
        background: {
            default: "#03071e",
            paper: "#22223b",
            input: "#0A111F",
        },
        custom: {
            linkedin: "#0e76a8",
            github: "#333",
            tag: "#DC4141",
        },
    },
    overrides: {
        MuiCard: {
            root: {
                maxWidth: 600,
                borderRadius: 20,
            },
        },
    },
});

theme = responsiveFontSizes(theme);

const Themer = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Themer.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Themer;
