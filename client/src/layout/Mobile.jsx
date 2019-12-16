import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Link, Route } from 'react-router-dom';
import {
	Responsive,
	Icon,
	Button,
	Sidebar,
	Image,
	Menu,
	Segment
} from 'semantic-ui-react';

// function to get width for responsive containers
const getWidth = () => {
  return typeof window === 'undefined' ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class MobileMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  hideSideBar = () => this.setState({ open: false })
  showSideBar = () => this.setState({ open: true })

  render() {
    const { routes, children, social } = this.props;
    const { open } = this.state;
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
          onHide={this.hideSideBar}
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
            size='massive'
            inverted
            style={headSegStyle}
          >
            <Button 
              color='violet'
              circular
              inverted
              size='small'
              onClick={this.showSideBar}
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

            {/* SOCIAL LINKS */}
            {
              social.map((item,index) => 
                <Button 
                  color={item.color} 
                  inverted 
                  floated='right' 
                  key={index} 
                  circular
                  size='tiny' 
                  icon={item.icon} 
                  href={item.href} 
                />
              )
            }
          </Segment>

          { children }
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileMenu.propTypes = {
  children: PropTypes.node,
}

export default MobileMenu