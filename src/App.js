import React, { Component } from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import {Switch as RouteSwitch} from 'react-router-dom';
import {Layout, Menu, Icon, Switch, BackTop, Tooltip} from 'antd';
import Home from './Home.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'

const { Footer, Sider } = Layout;

class App extends Component {
  state = {
    theme: 'dark',
    collapsed: true,
    selectedKeys:[],
    hmode:'left'
  };

  handleMenuClick = value => {
    this.setState({
      selectedKeys:value.keyPath
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount(){
    let curr_path = window.location.pathname;
    const path_map = {};
    path_map['/']='1';
    path_map['/about']='2';
    path_map['/portfolio']='3';
    path_map['/contact']='4';
    this.setState({
      selectedKeys:[path_map[curr_path]],
      hmode: window.screen.width < 457 ? "left" : "alternate"
    });
  };

  render() {
    const mStyle = {height:"100vh","paddingTop":"13px", "fontSize":"25px",border:0};
    return (
      <div className="App">
        <Tooltip title="Top of page">
          <BackTop visibilityHeight={50}>
            <div className="top-btn"><Icon type="up-circle"/></div>
          </BackTop>
        </Tooltip>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsible={true}
            trigger={null}
            collapsed={this.state.collapsed}
            theme={this.state.theme}
            collapsedWidth={84}
            className="sider"
          >
            <Menu theme={this.state.theme} mode="inline" style={mStyle} selectedKeys={this.state.selectedKeys}>
              <center>
                <Switch
                  checked={this.state.theme === 'dark'}
                  onChange={this.changeTheme}
                  checkedChildren={this.state.collapsed ? 'Dark':'Dark Mode'}
                  unCheckedChildren={this.state.collapsed ? 'Light':'Light Mode'}
                  className="toggle-theme"
                />
              </center>
              <Menu.Item key="0" onClick={this.toggle}>
                <center><Icon type={this.state.collapsed ? 'menu-unfold':'menu-fold'} style={{"fontSize":"20px"}} /></center>
                <span className="nav_Header">Expand Navbar</span>
              </Menu.Item>
              <Menu.Item key="1" onClick={this.handleMenuClick}className="hvr-underline-from-center">
                <Link to="/">
                  <Icon type="home" style={{"fontSize":"20px"}} />
                  <span className="nav_Text">Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2" onClick={this.handleMenuClick}className="hvr-underline-from-center">
                <Link to="/about">
                  <Icon type="user" style={{"fontSize":"20px"}} />
                  <span className="nav_Text">About</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3" onClick={this.handleMenuClick}className="hvr-underline-from-center">
                <Link to="/portfolio">
                  <Icon type="area-chart" style={{"fontSize":"20px"}} />
                  <span className="nav_Text">Portfolio</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4" onClick={this.handleMenuClick}className="hvr-underline-from-center">
                <Link to="/contact">
                  <Icon type="message" style={{"fontSize":"20px"}} />
                  <span className="nav_Text">Contact</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <RouteSwitch>
              <Route exact path="/" render={(props) => <Home {...props} mode={this.state.hmode} />} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </RouteSwitch>
            <Footer style={{backgroundColor:'#fff'}}>
              <center>
                <a href="https://github.com/siddg97/" className="hvr-float" target="_blank" rel="noopener noreferrer"><Icon theme="outlined" type="github" style={{"fontSize":"40px",color:'black'}}/></a>
                <a href="https://www.facebook.com/siddharth.gupta.1997" className="hvr-float" target="_blank" rel="noopener noreferrer"><Icon theme="filled" type="facebook" style={{"fontSize":"40px", color: '#3C5A99'}}/></a>
                <a href="https://www.linkedin.com/in/siddharth-gupta-b0245b113/" className="hvr-float" target="_blank" rel="noopener noreferrer"><Icon theme="filled" type="linkedin" style={{"fontSize":"40px", color: '#0077B5'}}/></a>
                <br/>
                Created by - Siddharth Gupta © 2019
              </center>
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
