import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { 
  Container, 
  Button,  
  Segment, 
  Icon,
  Grid,
  Header 
} from 'semantic-ui-react';

import DesktopMenu from './layout/Computer.jsx';
import MobileMenu from './layout/Mobile.jsx';

// Pages component
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
  {
    icon:'instagram',
    href:'https://www.instagram.com/?hl=en',
    color:'purple',
    color2:'instagram'
  } 
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

const Footer = () => (
  <Segment 
    color='olive'
    inverted 
    vertical 
    style={{minHeight:'10vh', padding:'4em', border:0, borderRadius:0}}
  >
    <Container>
      <Grid 
        divided 
        stackable 
        celled='internally'
      >
        <Grid.Row >
          <Grid.Column 
            width={6} 
            textAlign='center' 
            verticalAlign='middle'
          >
          {
            social.map((item,i) =>
              <Button size='large' key={i} circular color={item.color2} icon={item.icon} href={item.href} />
            )
          }
          </Grid.Column>
          <Grid.Column 
            width={10} 
            textAlign='center' 
            verticalAlign='middle'
          >
            <Header 
              as='span' 
              size='medium'
            >
              Created with {' '}
            </Header>
            <Icon 
              name='like' 
              color='red' 
              size='large'
            />
            <Header 
              as='span' 
              size='medium'
            >
              by Siddharth Gupta
            </Header>
            <Header 
              as='h3' 
              size='tiny' 
            >
              Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

const pageStyle={minHeight:'80vh',border:0, borderRadius:0, margin:0, padding: '1.5em 0.5em 4em 0.5em'};

const App = () => (
  <ResponsiveView>
    <Segment 
      inverted
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
    <Footer />
  </ResponsiveView>
)

export default App;