import React, { Component } from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import {Switch as RouteSwitch} from 'react-router-dom';
import {Layout, Menu, Divider, Icon, Switch} from 'antd';
import Home from './Home.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'

const { Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    theme: 'dark',
  }

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  render() {
    const mStyle = {height:"100vh","paddingTop":"15px", "fontSize":"25px"};
    return (
      <div className="App">
        <Layout>
          <Sider
            breakpoint="sm"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            theme={this.state.theme}
            className="sider"
            width={"auto"}
          >
            <Menu theme={this.state.theme} mode="inline" style={mStyle}>
              <center>
                <Switch
                  checked={this.state.theme === 'dark'}
                  onChange={this.changeTheme}
                  checkedChildren="Dark Mode"
                  unCheckedChildren="Light Mode"
                  className="toggle-theme"
                />
              </center>
              <Divider/>
              <Menu.Item key="0">
                <Icon type="menu" style={{"fontSize":"25px"}} />
                <span className=" nav_Text">NAVIGATION</span>
              </Menu.Item>
              <Divider/>
              <Menu.Item key="1" className="hvr-underline-from-center">
                <Link to="/">
                <Icon type="home" style={{"fontSize":"25px"}} />
                <span className=" nav_Text">Home</span>
                </Link>
              </Menu.Item>
              <br/>
              <Menu.Item key="2" className="hvr-underline-from-center">
                <Link to="/about">
                <Icon type="user" style={{"fontSize":"25px"}} />
                <span className=" nav_Text">About</span>
                </Link>
              </Menu.Item>
              <br/>
              <Menu.Item key="3" className="hvr-underline-from-center">
                <Link to="/portfolio">
                <Icon type="solution" style={{"fontSize":"25px"}} />
                <span className=" nav_Text">Portfolio</span>
                </Link>
              </Menu.Item>
              <br/>
              <Menu.Item key="4" className="hvr-underline-from-center">
                <Link to="/contact">
                <Icon type="message" style={{"fontSize":"25px"}} />
                <span className=" nav_Text">Contact</span>
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
                <Route path="/contact" component={Contact} />
              </RouteSwitch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <center>
                <a href="https://github.com/siddg97/" className="hvr-float" target="_blank" rel="noopener noreferrer"><Icon theme="outlined" type="github" style={{"fontSize":"40px",color:'black'}}/></a>
                <a href="https://www.facebook.com/siddharth.gupta.1997" className="hvr-float" target="_blank" rel="noopener noreferrer"><Icon theme="filled" type="facebook" style={{"fontSize":"40px", color: '#3C5A99'}}/></a>
                <a href="https://www.linkedin.com/in/siddharth-gupta-b0245b113/" className="hvr-float" target="_blank" rel="noopener noreferrer"><Icon theme="filled" type="linkedin" style={{"fontSize":"40px", color: '#0077B5'}}/></a>
              </center>
              <br/>
             Created by - Siddharth Gupta © 2019
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
