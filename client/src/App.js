import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {  
  Segment 
} from 'semantic-ui-react';

import { ThemeContext } from './_context/store.js';

// Menus and footer
import Footer from './layout/Footer.jsx';
import DesktopMenu from './layout/Computer.jsx';
import MobileMenu from './layout/Mobile.jsx';

// Pages component
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Skills from './pages/Skills.jsx';


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
    color:'olive'
  },
  {
    path:'/skills',
    exact: true,
    head: () => <span>Skills</span>,
    comp: Skills,
    name: 'skills',
    icon: 'cogs',
    text: 'Skills',
    color: 'orange'
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
    icon:'facebook',
    href:'https://www.facebook.com/siddharth.gupta.1997',
    color:'red',
    color2:'facebook'
  },
  {
    icon:'github',
    href:'https://github.com/siddg97',
    color:'yellow',
    color2:'black'
  },
  {
    icon:'linkedin',
    href:'https://www.linkedin.com/in/siddharth-gupta-b0245b113/',
    color:'blue',
    color2:'linkedin'
  },
  {
    icon:'stack overflow',
    href:'https://stackoverflow.com/story/sg97',
    color:'orange',
    color2:'orange'
  },
];

const ResponsiveView = ({ children }) => (
  <div>
    <DesktopMenu routes={routes} social={social}>{children}</DesktopMenu>
    <MobileMenu routes={routes} social={social}>{children}</MobileMenu>
  </div>
)

ResponsiveView.propTypes = {
  children: PropTypes.node,
}


const App = () => {
  const { theme } = useContext(ThemeContext);
  const pageStyle = {
    minHeight:'75vh',
    border:0, 
    borderRadius:0, 
    margin:0, 
    padding: '1.5em 0.5em 4em 0.5em'
  };
  return (
    <ResponsiveView>
      <Segment 
        inverted={theme}
        style={pageStyle}
      >
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
      </Segment>
      <Footer social={social} />
    </ResponsiveView>
  )
}

export default App;