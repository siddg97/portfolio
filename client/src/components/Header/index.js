import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Toolbar from '@material-ui/core/Toolbar';
import { getHeader, getSidebarTrigger } from '@mui-treasury/layout';
import styled from 'styled-components';
import SocialLinks from 'components/SocialLink/index';

const SidebarTrigger = getSidebarTrigger(styled);
const BaseHeader = getHeader(styled);

const styles = ({ spacing, palette: { type, grey } }) => ({
    header: {
        fontWeight: 900,
        minWidth: 0,
        fontSize: 20,
    },
    grow: {
        flexGrow: 1,
    },
    toolbar: {
        paddingTop: spacing(1),
        paddingBottom: spacing(1),
        background: type === 'light' ? grey[100] : grey[900],
    },
});

const Header = ({ classes, darkThemeToggle, setDarkThemeToggle }) => (
    <BaseHeader>
        <Toolbar className={classes.toolbar}>
            <SidebarTrigger sidebarId='primarySidebar' />
            <Typography noWrap color={'textSecondary'} className={classes.header}>
                S.G.
            </Typography>
            <div className={classes.grow} />
            <SocialLinks type={'header'} />
            <IconButton
                color='secondary'
                onClick={() => setDarkThemeToggle(!darkThemeToggle)}
                component='span'
            >
                {!darkThemeToggle ? <Brightness3Icon /> : <Brightness7Icon />}
            </IconButton>
        </Toolbar>
    </BaseHeader>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    darkThemeToggle: PropTypes.bool.isRequired,
    setDarkThemeToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
