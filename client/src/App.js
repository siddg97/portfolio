import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { 
  Container, 
  Button, 
  Sidebar, 
  Segment, 
  Menu, 
  Icon, 
  Image, 
  Responsive, 
  Visibility,
  Grid,
  Header 
} from 'semantic-ui-react';



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
    comp: () => <Home mobile />,
    name:'home',
    icon:'home',
    text:'Home',
    color:'red'
  },
  {
    path:'/about',
    exact:true,
    head: () => <span>About</span>,
    comp: () => <About mobile />,
    name:'about',
    icon:'user',
    text:'About',
    color:'blue'
  },
  {
    path:'/portfolio',
    exact:true,
    head: () => <span>Portfolio</span>,
    comp: () => <Portfolio mobile />,
    name:'portfolio',
    icon:'trophy',
    text:'Portfolio',
    color:'green'
  },
  {
    path:'/contact',
    exact:true,
    head: () => <span>Contact</span>,
    comp: () => <Contact mobile />,
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
    color:'red'
  },
  {
    icon:'github',
    href:'https://github.com/siddg97',
    color:'yellow'
  },
  {
    icon:'linkedin',
    href:'https://www.linkedin.com/in/siddharth-gupta-b0245b113/',
    color:'blue'
  },
  {
    icon:'stack overflow',
    href:'https://stackoverflow.com/story/sg97',
    color:'orange'
  },
  {
    icon:'instagram',
    href:'https://www.instagram.com/?hl=en',
    color:'purple'
  } 
];

// function to get width for responsive containers
const getWidth = () => {
  return typeof window === 'undefined' ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class DesktopMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: 'home'
    }
  }

  hideMenu = () => this.setState({ menu: false })
  showMenu = () => this.setState({ menu: true })
  handleMenuClick = (e, {name}) => this.setState( {active: name} );

  render() {
    const { active } = this.state;
    const { children } = this.props;
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
                    as={Link}
                    to={item.path}
                    name={item.name}
                    active={active===item.name}
                    onClick={this.handleMenuClick}
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


class MobileMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: 'home'
    };
  }

  hideSideBar = () => this.setState({ open: false })
  showSideBar = () => this.setState({ open: true })
  handleMenuClick = (e, {name}) => {
    this.setState( {active:name} );
    this.hideSideBar();
  }

  render() {
    const { children } = this.props;
    const { open, active } = this.state;
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
            name='home'
            onClick={this.handleMenuClick}
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
                as={Link}
                to={item.path}
                name={item.name}
                active={active===item.name}
                fitted='horizontally'
                onClick={this.handleMenuClick}
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

const ResponsiveView = ({ children }) => (
  <div>
    <DesktopMenu>{children}</DesktopMenu>
    <MobileMenu>{children}</MobileMenu>
  </div>
)

ResponsiveView.propTypes = {
  children: PropTypes.node,
}

const App = () => (
  <ResponsiveView>
    <Switch>
    {
      routes.map((route,i) => (
        <Route 
          key={i}
          path={route.path}
          exact={route.exact}
          render={route.comp}
        />
      ))
    }
    </Switch>
    <Segment inverted vertical style={{minHeight:'10vh', padding:'4em', border:0, borderRadius:0}}>
      <Container>
        <Grid divided stackable celled='internally'>
          <Grid.Row >
            <Grid.Column width={6} textAlign='center' verticalAlign='middle'>
            {
              social.map((item,i) =>
                <Button size='large' key={i} circular color={item.color} icon={item.icon} href={item.href} />
              )
            }
            </Grid.Column>
            <Grid.Column width={10} textAlign='center' verticalAlign='middle'>
              <Header as='span' color='grey' size='medium'>
                Created with {' '}
              </Header>
              <Icon name='like' color='red' size='large' />
              <Header as='span' inverted size='medium'>
                by Siddharth Gupta
              </Header>
              <Header as='h3' size='small' inverted>
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveView>
)

export default App;