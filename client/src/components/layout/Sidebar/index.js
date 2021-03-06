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

const styles = ({
    palette: {
        background: { default: bg },
    },
}) => ({
    drawerBg: {
        background: bg,
    },
});

const DrawerSidebar = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);

const Sidebar = ({ classes, sidebar, setOpen }) => {
    return (
        <DrawerSidebar classes={{ paper: classes.drawerBg }} sidebarId='primarySidebar'>
            <SidebarContent>
                <SidebarHeader collapsed={sidebar.primarySidebar.collapsed} />
                <SidebarNavLinks setOpen={setOpen} />
            </SidebarContent>
            <CollapseBtn />
        </DrawerSidebar>
    );
};

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    sidebar: PropTypes.object.isRequired,
    setOpen: PropTypes.func,
};

export default withStyles(styles)(Sidebar);
