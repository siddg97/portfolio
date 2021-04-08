import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Toolbar from '@material-ui/core/Toolbar';
import { getHeader, getSidebarTrigger } from '@mui-treasury/layout';
import styled from 'styled-components';
import SocialLinks from 'components/common/SocialLink/index';

const SidebarTrigger = getSidebarTrigger(styled);
const BaseHeader = getHeader(styled);

const styles = ({
    spacing,
    palette: {
        background: { default: bg },
    },
}) => ({
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
        background: bg,
    },
});

const Header = ({ classes, darkThemeToggle, setDarkThemeToggle }) => (
    <BaseHeader>
        <Toolbar className={classes.toolbar}>
            <SidebarTrigger sidebarId='primarySidebar' />
            <div className={classes.grow} />
            <SocialLinks type={'header'} />
            <IconButton
                color='primary'
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
