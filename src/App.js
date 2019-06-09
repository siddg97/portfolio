import React, { Component } from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import {Switch as RouteSwitch} from 'react-router-dom';
import {Layout, Menu, Icon, Switch} from 'antd';
import Home from './Home.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'


const { Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    theme: 'dark',
    page:'1'
  }

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
      page: this.state.page
    });
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            theme={this.state.theme}
            className="sider"
          >
            <Menu theme={this.state.theme} mode="inline" style={{height:"100vh","paddingTop":"15px"}} defaultSelectedKeys={['1']}>
              <center>
                <Switch
                  checked={this.state.theme === 'dark'}
                  onChange={this.changeTheme}
                  checkedChildren="Dark Mode"
                  unCheckedChildren="Light Mode"
                  className="toggle-theme"
                />
              </center>
              <Menu.Item key="1">
                <Link to="/">
                <Icon type="home" style={{"fontSize":"25px"}} />
                <span className="nav-text nav_Text hvr-underline-from-center">Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">
                <Icon type="user" style={{"fontSize":"25px"}} />
                <span className="nav-text nav_Text hvr-underline-from-center">About</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/portfolio">
                <Icon type="solution" style={{"fontSize":"25px"}} />
                <span className="nav-text nav_Text hvr-underline-from-center">Portfolio</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/contact">
                <Icon type="contacts" style={{"fontSize":"25px"}} />
                <span className="nav-text nav_Text hvr-underline-from-center">Contact</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <RouteSwitch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" />
              </RouteSwitch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <div>
                <center>
                  <a href="https://github.com/siddg97/" target="_blank"><Icon theme="outlined" type="github" style={{"fontSize":"40px"}}/></a>
                  <a href="https://www.facebook.com/siddharth.gupta.1997" target="_blank"><Icon theme="filled" type="facebook" style={{"fontSize":"40px"}}/></a>
                  <a href="https://www.linkedin.com/in/siddharth-gupta-b0245b113/" target="_blank"><Icon theme="filled" type="linkedin" style={{"fontSize":"40px"}}/></a>
                </center>
              </div><br/>
             Created by - Siddharth Gupta © 2019
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
