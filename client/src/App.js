import React, { useState } from 'react';
import { buildLayoutScheme } from 'layout.config';

import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Root } from '@mui-treasury/layout';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Content from 'components/Content/index';
import {
    createMuiTheme,
    ThemeProvider,
    responsiveFontSizes,
    Divider,
} from '@material-ui/core';
import { darkTheme, lightTheme } from 'theme.config';
import { routes } from 'nav.config';
import PropTypes from 'prop-types';

const scheme = buildLayoutScheme();

const renderRoute = ({ path, exact, component }) => (
    <Route path={path} key={path} exact={exact}>
        {component}
    </Route>
);

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
});

const App = ({ classes }) => {
    const [darkThemeToggle, setDarkThemeToggle] = useState(true);
    const theme = createMuiTheme(darkThemeToggle ? darkTheme : lightTheme);

    return (
        <ThemeProvider theme={responsiveFontSizes(theme)}>
            <CssBaseline />
            <Root themeProviderOmitted scheme={scheme}>
                {({ state: { sidebar } }) => (
                    <div className={classes.root}>
                        <Header
                            darkThemeToggle={darkThemeToggle}
                            setDarkThemeToggle={setDarkThemeToggle}
                        />
                        <Sidebar sidebar={sidebar} />
                        <Content>
                            <Switch>{routes.map(renderRoute)}</Switch>
                        </Content>
                        <Divider />
                        <Footer />
                    </div>
                )}
            </Root>
        </ThemeProvider>
    );
};

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
