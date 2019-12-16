import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
	Responsive,
	Icon,
	Button,
	Menu,
	Segment,
	Container,
	Visibility
} from 'semantic-ui-react';

// function to get width for responsive containers
const getWidth = () => {
  return typeof window === 'undefined' ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  hideMenu = () => this.setState({ menu: false })
  showMenu = () => this.setState({ menu: true })

  render() {
    const { routes, children, social } = this.props;
    const segStyle = {border:0, borderRadius:0, margin:0, minHeight:'5vh'};
    return (
      <Responsive
        getWidth={getWidth}
        minWidth={Responsive.onlyComputer.minWidth}
      >
        <Visibility
          once={false}
          onBottomPassed={this.showMenu}
          onBottomPassedReverse={this.hideMenu}
        >
          <Segment
            inverted
            size='large'
            style={segStyle}
          >
            <Menu
              inverted
              pointing
              secondary
              size='huge'
            >

              <Container>
              {
                routes.map((item,i) => 
                  <Menu.Item 
                    key={i}
                    as={NavLink}
                    exact
                    to={item.path}
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
                      size='large' 
                      icon={item.icon} 
                      href={item.href} 
                    />
                  </Menu.Item>
                )
              }
            </Menu>
          </Segment>
        </Visibility>
        { children }
      </Responsive>
    )
  }
}

DesktopMenu.propTypes = {
  children: PropTypes.node,
}

export default DesktopMenu