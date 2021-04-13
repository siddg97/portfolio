import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import { routes } from 'nav.config';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarLink = ({ route, onClick }) => {
    const { exact, primaryText, path, icon } = route;
    return (
        <ListItem
            button
            onClick={onClick}
            exact={exact}
            to={path}
            component={NavLink}
            activeClassName='Mui-selected'
        >
            <ListItemIcon>
                <Icon color='primary'>{icon}</Icon>
            </ListItemIcon>
            <ListItemText
                primary={primaryText}
                primaryTypographyProps={{ noWrap: true }}
            />
        </ListItem>
    );
};

SidebarLink.propTypes = {
    route: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

const sanitizeRoutesList = (routes) => {
    const routesWithComponent = routes.map((route) => {
        const r = { ...route };
        delete r.component;
        return r;
    });
    const contactRouteIndex = routesWithComponent.length - 1;
    const routesWithoutContact = routesWithComponent.slice(0, contactRouteIndex);
    const contactRoute = routesWithComponent[contactRouteIndex];
    return { routesWithoutContact, contactRoute };
};

const SidebarNavLinks = ({ setOpen }) => {
    const { routesWithoutContact, contactRoute } = sanitizeRoutesList(routes);
    const handleNavLinkClick = () => {
        setOpen('primarySidebar', false);
    };
    return (
        <List>
            {routesWithoutContact.map((route) => (
                <SidebarLink
                    key={route.path}
                    route={route}
                    onClick={handleNavLinkClick}
                />
            ))}
            <Divider style={{ margin: '12px 0' }} />
            <SidebarLink route={contactRoute} onClick={handleNavLinkClick} />
        </List>
    );
};

SidebarNavLinks.propTypes = {
    setOpen: PropTypes.func,
};

SidebarNavLinks.defaultProps = {
    setOpen: () => {},
};

export default SidebarNavLinks;
