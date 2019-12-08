import React from 'react';
import './App.css';

import { Label, Button, Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import { Switch, Route, Link } from 'react-router-dom';


const routes = [
  {
    path:'/',
    exact:true,
    head: () => <span>Home</span>
  },
  {
    path:'/about',
    exact:true,
    head: () => <span>About</span>
  },
  {
    path:'/portfolio',
    exact:true,
    head: () => <span>Portfolio</span>
  },
  {
    path:'/contact',
    exact:true,
    head: () => <span>Contact</span>
  },
];

const social = [
  {
    icon:'instagram',
    href:'https://www.instagram.com/?hl=en'
  },
  {
    icon:'stack overflow',
    href:'https://stackoverflow.com/story/sg97'
  },
  {
    icon:'linkedin',
    href:'https://www.linkedin.com/in/siddharth-gupta-b0245b113/'
  },
  {
    icon:'github',
    href:'https://github.com/siddg97'
  },
  {
    icon:'facebook',
    href:'https://www.facebook.com/siddharth.gupta.1997'
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
    this.closeMenu();
  }

  render(){
    const pageStyle={height:'100vh', border:0, borderRadius:0};
    const headSegStyle={height:'auto', border:0, borderRadius:0};
    const { menu, active } = this.state;
    return (
      <Sidebar.Pushable as={Segment} style={pageStyle}>
        {/* NAV MENU */}
        <Sidebar
          as={Menu}
          animation='overlay'
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

        {/* CONTENT */}
        <Sidebar.Pusher
          dimmed={menu}
        >
          {/* MAIN HEADER */}
          <Segment size='massive' inverted style={headSegStyle}>
            {/* MENU BUTTON and LABEL */}
            <Button as='div' labelPosition='right'>
              <Button inverted positive size='large' icon={ menu ? 'outdent' : 'indent' } primary onClick={this.showMenu} />
              <Label basic pointing='left'>
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
              </Label>
            </Button>

            {/* SOCIAL LINKS */}
            {
              social.map((item,index) => 
                <Button  inverted floated='right' key={index} circular size='huge' icon={item.icon} href={item.href}/>
              )
            }
            
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
  
}

export default App;
