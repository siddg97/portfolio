import React from 'react';
import './App.css';

import { Button, Sidebar, Segment, Menu, Icon, Image, Label } from 'semantic-ui-react';
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
    comp: Home,
    name:'home',
    icon:'home',
    text:'Home',
    color:'red'
  },
  {
    path:'/about',
    exact:true,
    head: () => <span>About</span>,
    comp: About,
    name:'about',
    icon:'user',
    text:'About',
    color:'blue'
  },
  {
    path:'/portfolio',
    exact:true,
    head: () => <span>Portfolio</span>,
    comp: Portfolio,
    name:'portfolio',
    icon:'trophy',
    text:'Portfolio',
    color:'green'
  },
  {
    path:'/contact',
    exact:true,
    head: () => <span>Contact</span>,
    comp: Contact,
    name:'contact',
    icon:'discussions',
    text:'Contact',
    color:'violet'
  },
];

const social = [
  {
    icon:'instagram',
    href:'https://www.instagram.com/?hl=en',
    color:'purple'
  },
  {
    icon:'stack overflow',
    href:'https://stackoverflow.com/story/sg97',
    color:'orange'
  },
  {
    icon:'linkedin',
    href:'https://www.linkedin.com/in/siddharth-gupta-b0245b113/',
    color:'blue'
  },
  {
    icon:'github',
    href:'https://github.com/siddg97',
    color:'yellow'
  },
  {
    icon:'facebook',
    href:'https://www.facebook.com/siddharth.gupta.1997',
    color:'red'
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
    const pageStyle={minHeight:'100vh', border:0, borderRadius:0};
    const headSegStyle={border:0, borderRadius:0, margin:0, minHeight:'5vh'};
    const footSegStyle={minHeight:'10vh', border:0, borderRadius:0, margin:0};
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
          {
            routes.map((route,i) => 
              <Menu.Item
                key={i}
                as={Link}
                to={route.path}
                name={route.name}
                active={active===route.name}
                fitted='horizontally'
                onClick={this.handleMenuClick}
              >
                <Icon 
                  inverted
                  color={route.color}
                  name={route.icon}
                />
                {route.text}
              </Menu.Item>
            )
          }
        </Sidebar>

        {/* MAIN DISPLAY OF PAGE */}
        <Sidebar.Pusher
          dimmed={menu}
        >
          {/* MAIN HEADER */}
          <Segment size='massive' inverted style={headSegStyle}>
            {/* MENU BUTTON */}
            <Button color='violet' circular inverted size='large' onClick={this.showMenu} animated>
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

            
            {/* SOCIAL LINKS */}
            {
              social.map((item,index) => 
                <Button color={item.color} inverted floated='right' key={index} circular size='large' icon={item.icon} href={item.href} />
              )
            }

            {/* Avatar */}
            <Label as={Link} to='/' size='huge' color='black' circular>
              Siddharth Gupta
            </Label>
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

          {/* FOOTER SECTION */}
          <Segment size='massive' inverted style={footSegStyle}>
            <h2> FOOTER GOES HERE.... </h2>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
  
}

export default App;
