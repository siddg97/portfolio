import React from 'react';
import './App.css';

import { Label, Button, Sidebar, Segment, Menu, Icon, Image } from 'semantic-ui-react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';


const routes = [
  {
    path:'/',
    exact:true,
    head: () => <span>Home</span>,
    comp: Home
  },
  {
    path:'/about',
    exact:true,
    head: () => <span>About</span>,
    comp: About
  },
  {
    path:'/portfolio',
    exact:true,
    head: () => <span>Portfolio</span>,
    comp: Portfolio
  },
  {
    path:'/contact',
    exact:true,
    head: () => <span>Contact</span>,
    comp: Contact
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
            name='home' 
            onClick={this.handleMenuClick}
          >
            {/* Avatar */}
            <Image src='http://localhost:5000/assets/me.jpg' size='small' avatar/>
          </Menu.Item>
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
            {/* MENU BUTTON */}
            <Button color='orange' circular inverted size='large' onClick={this.showMenu} animated>
              <Button.Content visible> 
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
              </Button.Content>
              <Button.Content hidden>
                <Icon name='list layout'/>
              </Button.Content>
            </Button>
            
            {/* Avatar */}
            <Image floated='right' src='http://localhost:5000/assets/me.jpg' avatar/>

            {/* SOCIAL LINKS */}
            {
              social.map((item,index) => 
                <Button inverted floated='right' key={index} circular size='huge' icon={item.icon} href={item.href}/>
              )
            }
          </Segment>

          {/* CONTENT SECTION*/}
          <Switch>
          {
            routes.map((route,i) => (
              <Route 
                key={i}
                path={route.path}
                exact={route.exact}
                component={route.comp}
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
