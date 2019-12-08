import React from 'react';
import './App.css';

import { Button, Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import { Switch, Route, Link } from 'react-router-dom';


const routes = [
  {
    path:'/',
    exact:true,
    head: () => <h2>Home</h2>
  },
  {
    path:'/about',
    exact:true,
    head: () => <h2>About</h2>
  },
  {
    path:'/portfolio',
    exact:true,
    head: () => <h2>Portfolio</h2>
  },
  {
    path:'/contact',
    exact:true,
    head: () => <h2>Contact</h2>
  },
];

class App extends React.Component {
  constructor(){
    super();
    this.state={
      menu: false,
      active: 'home',
    }
  }

  closeMenu = () => {
    this.setState( {menu:false} );
  }

  showMenu = () => {
    this.setState( {menu:true} );
  }

  handleMenuClick = (e, {name}) => {
    this.setState( {active:name} );
  }

  render(){
    const pageStyle={height:'100vh', border:0, borderRadius:0};

    const { menu, active } = this.state;
    return (
      <Sidebar.Pushable as={Segment} style={pageStyle}>
        {/* NAV MENU */}
        <Sidebar
          as={Menu}
          animation='scale down'
          inverted
          size='huge'
          width='thin'
          icon='labeled'
          onHide={this.closeMenu}
          vertical
          borderless
          visible={menu}
        >
          <Menu.Item
            as={Link}
            to='/'
            active={active==='home'}
            name='home'
            fitted='horizontally'
            onClick={this.handleMenuClick}
          >
            <Icon inverted color='red' name='home' />
            Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            to='/about'
            active={active==='about'}
            name='about'
            fitted='horizontally'
            onClick={this.handleMenuClick}
          >
            <Icon inverted color='blue' name='user' />
            About
          </Menu.Item>
          <Menu.Item
            as={Link}
            to='/portfolio'
            active={active==='portfolio'}
            name='portfolio'
            fitted='horizontally'
            onClick={this.handleMenuClick}
          >
            <Icon inverted color='green' name='trophy' />
            Portfolio
          </Menu.Item>
          <Menu.Item
            as={Link}
            to='/contact'
            active={active==='contact'}
            name='contact'
            fitted='horizontally'
            onClick={this.handleMenuClick}
          >
            <Icon inverted color='violet' name='discussions' />
            Contact
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Button onClick={this.showMenu}>Menu</Button>
          <Switch>
          {
            routes.map((route,index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.head />}
              />
            ))
          }
          </Switch>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
  
}

export default App;
