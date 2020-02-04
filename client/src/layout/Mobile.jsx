import React, { useState, useContext } from 'react';
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

import { ThemeContext } from '../_context/store.js';

// function to get width for responsive containers
const getWidth = () => {
  return typeof window === 'undefined' ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const MobileMenu = ({ routes, children, social }) => {
  // Hook into state for menu behaviour
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  // theme context
  const { theme, dispatch } = useContext(ThemeContext);
  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' })

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
        inverted={theme}
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
            src='http://gsidd97.herokuapp.com/assets/me.jpg' 
            size='small' 
            avatar
          />
        </Menu.Item>
        
        <Menu.Item 
          onClick={toggleTheme}
        >
          <Icon name={theme ? 'lightbulb' : 'sun'}/>
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
                inverted={theme}
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
          inverted={theme}
          style={headSegStyle}
        >
          <Menu 
            inverted={theme}
            secondary
          >
            <Container>
              <Menu.Item
                fitted='horizontally'
              >
                <Button
                  color='violet'
                  circular
                  inverted={theme}
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
                    inverted={theme}
                    circular
                    size='medium' 
                    icon={item.icon} 
                    href={item.href} 
                  />
                </Menu.Item>
              )
            }
	    <Button
		circular
		inverted={theme}
		icon = { theme ? 'lightbulb' : 'sun' }
		onClick={toggleTheme}
            />
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
