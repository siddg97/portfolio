import React from 'react';
import styled from 'styled-components';
import {
    getDrawerSidebar,
    getSidebarContent,
    getCollapseBtn,
} from '@mui-treasury/layout';
import SidebarHeader from './SidebarHeader';
import SidebarNavLinks from './SidebarNavLinks';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = ({ palette: { type, grey } }) => {
    console.log(grey);
    return {
        drawerBg: {
            background: type === 'light' ? grey[100] : grey[900],
        },
    };
};

const DrawerSidebar = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);

const Sidebar = ({ classes, sidebar }) => {
    return (
        <DrawerSidebar classes={{ paper: classes.drawerBg }} sidebarId='primarySidebar'>
            <SidebarContent>
                <SidebarHeader collapsed={sidebar.primarySidebar.collapsed} />
                <SidebarNavLinks />
            </SidebarContent>
            <CollapseBtn />
        </DrawerSidebar>
    );
};

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    sidebar: PropTypes.object.isRequired,
    // setOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(Sidebar);
