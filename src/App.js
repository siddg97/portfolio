import React, { Component } from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import {Switch as RouteSwitch} from 'react-router-dom';
import {Button, Drawer, Layout, Menu, Icon, BackTop, Tooltip} from 'antd';
import Home from './Home.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'

const { Footer, Header } = Layout;

class App extends Component {
  state = {
    nav: false,
    selectedKeys:[],
    title:'',
    hmode: window.screen.width < 457 ? "left" : "alternate"
  };

  handleMenuClick = value => {
  	const title_map= {};
  	title_map['1']= 'Home';
  	title_map['2']= 'About';
  	title_map['3']= 'Portfolio';
  	title_map['4']= 'Contact';
    this.setState({
      selectedKeys:value.keyPath,
      nav:false,
      title:title_map[value.keyPath]
    });
  };

  showNav = () => {
  	this.setState({nav:true});
  };

  hideNav = () => {
  	this.setState({nav:false});
  };

  componentDidMount(){
    let curr_path = window.location.pathname;
    const path_map = {};
    path_map['/']='1';
    path_map['/about']='2';
    path_map['/portfolio']='3';
    path_map['/contact']='4';
    const title_map= {};
  	title_map['1']= 'Home';
  	title_map['2']= 'About';
  	title_map['3']= 'Portfolio';
  	title_map['4']= 'Contact';
    this.setState({
      selectedKeys:[path_map[curr_path]],
      hmode: window.screen.width < 457 ? "left" : "alternate",
      title:title_map[path_map[curr_path]]
    });
  };

  render() { 
    return (
      <div className="App">
        <Tooltip title="Top of page">
          <BackTop visibilityHeight={50}>
            <div className="top-btn"><Icon type="up-circle"/></div>
          </BackTop>
        </Tooltip>
        <Layout>
          <Header style={{paddingLeft:10}}>
	        	<Button type="primary" size='large' shape="circle" onClick={this.showNav}><Icon type="menu" /></Button>
          	<Drawer placement='left' closable={false} onClose={this.hideNav} visible={this.state.nav}>
	            <Menu theme="dark" mode="inline" selectedKeys={this.state.selectedKeys} style={{minHeight:'100vh'}}>
	            	<Menu.Item key="0" disabled={true}>
                  <Icon type="menu" style={{"fontSize":"20px"}} />
                  <span className="nav_Text">Navigation</span>
	              </Menu.Item>
	            	<Menu.Item key="1" onClick={this.handleMenuClick}>
	                <Link to="/">
	                  <Icon type="home" style={{"fontSize":"20px"}} />
	                  <span className="nav_Text">Home</span>
	                </Link>
	              </Menu.Item>
	              <Menu.Item key="2" onClick={this.handleMenuClick}>
	                <Link to="/about">
	                  <Icon type="user" style={{"fontSize":"20px"}} />
	                  <span className="nav_Text">About</span>
	                </Link>
	              </Menu.Item>
	              <Menu.Item key="3" onClick={this.handleMenuClick}>
	                <Link to="/portfolio">
	                  <Icon type="area-chart" style={{"fontSize":"20px"}} />
	                  <span className="nav_Text">Portfolio</span>
	                </Link>
	              </Menu.Item>
	              <Menu.Item key="4" onClick={this.handleMenuClick}>
	                <Link to="/contact">
	                  <Icon type="message" style={{"fontSize":"20px"}} />
	                  <span className="nav_Text">Contact</span>
	                </Link>
	              </Menu.Item>
	            </Menu>
	          </Drawer>
	          <span className="nav_Header">{' '+this.state.title}</span>
        	</Header>
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
