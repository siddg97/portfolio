import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Link, Route } from 'react-router-dom';
import {
	Responsive,
	Icon,
	Button,
	Sidebar,
	Image,
	Menu,
  Container,
	Segment
} from 'semantic-ui-react';

// function to get width for responsive containers
const getWidth = () => {
  return typeof window === 'undefined' ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const MobileMenu = ({ routes, children, social }) => {
  // Hook into state for menu behaviour
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const headSegStyle = {border:0, borderRadius:0, margin:0}
  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyTablet.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation='push'
        inverted
        size='huge'
        width='thin'
        icon='labeled'
        onHide={closeMenu}
        vertical
        borderless
        visible={open}
      >
        {/* AVATAR */}
        <Menu.Item
          as={Link}
          to='/'
          active={false}
          disabled
        >
          <Image 
            src='http://localhost:5000/assets/me.jpg' 
            size='small' 
            avatar
          />
        </Menu.Item>
        {
          routes.map((item,i) =>
            <Menu.Item 
              key={i}
              as={NavLink}
              to={item.path}
              exact
              fitted='horizontally'
            >
              <Icon
                inverted
                color={item.color}
                name={item.icon}
              />
              {item.text}
            </Menu.Item>
          )
        }
      </Sidebar>

      <Sidebar.Pusher dimmed={open}>
        <Segment
          inverted
          style={headSegStyle}
        >
          <Menu 
            inverted
            secondary
          >
            <Container>
              <Menu.Item
                fitted='horizontally'
              >
                <Button
                  color='violet'
                  circular
                  inverted
                  size='small'
                  onClick={openMenu}
                >
                  <Switch>
                  {
                    routes.map((item,i) => 
                      <Route
                        key={i}
                        path={item.path}
                        exact={item.exact}
                        children={<item.head />}
                      />
                    )
                  }
                  </Switch>
                </Button>
              </Menu.Item>
            </Container>
            {/* SOCIAL LINKS */}
            {
              social.map((item,index) => 
                <Menu.Item
                  position='right'
                  fitted='horizontally'
                  key={index}
                >
                  <Button 
                    color={item.color} 
                    inverted
                    circular
                    size='medium' 
                    icon={item.icon} 
                    href={item.href} 
                  />
                </Menu.Item>
              )
            }
            </Menu>
        </Segment>
        { children }
      </Sidebar.Pusher>
    </Responsive>
  )
}

MobileMenu.propTypes = {
  children: PropTypes.node,
}

export default MobileMenu