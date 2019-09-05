import React, { Component } from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import {Switch as RouteSwitch} from 'react-router-dom';
import {Row, Col, Button, Drawer, Layout, Menu, Icon, BackTop, Tooltip} from 'antd';
import Home from './Home.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'

const { Footer, Header } = Layout;

class App extends Component {
	constructor(){
		super();
		let curr_path = window.location.pathname;
		const path_map = {};
		path_map['/']='Home';
		path_map['/about']='About';
		path_map['/portfolio']='Portfolio';
		path_map['/contact']='Contact';
		this.state = {
			nav: false,
			selectedKeys:[path_map[curr_path]],
			title:path_map[curr_path],
		};
	}

	handleMenuClick = e => {
		this.setState({
			selectedKeys:e.keyPath,
			nav:false,
			title:e.key
		});
		window.scrollTo(0,0);
	};

	showNav = () => {
		this.setState({nav:true});
	};

	hideNav = () => {
		this.setState({nav:false});
	};

	render() {
		let hmode = window.screen.width < 457 ? "left" : "alternate";
		return (
			<div className="App">
				<Tooltip title="Top of page">
					<BackTop visibilityHeight={50}>
						<Button type="primary" size='large' shape="circle"><Icon type="up-circle"/></Button>
					</BackTop>
				</Tooltip>
				<Layout>
					<Header style={{paddingLeft:16, height:'auto'}}>
						<Button type="primary" size='large' shape="circle" onClick={this.showNav}><Icon type="menu" /></Button>
						<Drawer placement='left' closable={false} onClose={this.hideNav} visible={this.state.nav}>
							<Menu theme="dark" mode="inline" selectedKeys={this.state.selectedKeys} style={{height:'100vh'}}>
								<Menu.Item key="0" disabled={true}>
									<Icon type="menu" style={{"fontSize":"20px"}} />
									<span className="nav_Text">Navigation</span>
								</Menu.Item>
								<Menu.Divider/>
								<Menu.Item key="Home" onClick={this.handleMenuClick}>
									<Link to="/">
										<Icon type="home" style={{"fontSize":"20px"}} />
										<span className="nav_Text">Home</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="About" onClick={this.handleMenuClick}>
									<Link to="/about">
										<Icon type="user" style={{"fontSize":"20px"}} />
										<span className="nav_Text">About</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="Portfolio" onClick={this.handleMenuClick}>
									<Link to="/portfolio">
										<Icon type="area-chart" style={{"fontSize":"20px"}} />
										<span className="nav_Text">Portfolio</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="Contact" onClick={this.handleMenuClick}>
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
							<Route exact path="/" render={(props) => <Home {...props} mode={hmode} />} />
							<Route path="/about" component={About} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/contact" component={Contact} />
						</RouteSwitch>
						<Footer style={{backgroundColor:'black',paddingLeft:24, paddingRight:24}}>
							<Row type="flex" align="middle">
								<Col xs={24} sm={24} md={4}>
									<Menu theme="dark" mode="inline" selectedKeys={this.state.selectedKeys}>
										<Menu.Item key="Home" onClick={this.handleMenuClick}>
												<Link to="/">
													<span className="footer-nav-text">Home</span>
												</Link>
										</Menu.Item>
										<Menu.Item key="About" onClick={this.handleMenuClick}>
												<Link to="/about">
													<span className="footer-nav-text">About</span>
												</Link>
										</Menu.Item>
										<Menu.Item key="Portfolio" onClick={this.handleMenuClick}>
												<Link to="/portfolio">
													<span className="footer-nav-text">Portfolio</span>
												</Link>
										</Menu.Item>
										<Menu.Item key="Contact" onClick={this.handleMenuClick}>
												<Link to="/contact">
													<span className="footer-nav-text">Contact</span>
												</Link>
										</Menu.Item>
									</Menu>
								</Col>
								<Col xs={24} sm={24} md={20}>
									<center>
										<a href="https://github.com/siddg97/" className="hvr-float logo-invert" target="_blank" rel="noopener noreferrer"><Icon theme="outlined" type="github" style={{"fontSize":"40px",color:'black'}}/></a>
										<a href="https://www.facebook.com/siddharth.gupta.1997" className="hvr-float logo-invert" target="_blank" rel="noopener noreferrer"><Icon theme="filled" type="facebook" style={{"fontSize":"40px", color: 'black'}}/></a>
										<a href="https://www.linkedin.com/in/siddharth-gupta-b0245b113/" className="hvr-float logo-invert" target="_blank" rel="noopener noreferrer"><Icon theme="filled" type="linkedin" style={{"fontSize":"40px", color: 'black'}}/></a>
										<br/><br/>
										<span style={{color:'#fff',fontSize:16}}>Created with <Icon type="heart" theme="filled" style={{color:'red',fontSize:28}} className="hvr-pop"/> by - <a href="http://siddg.info"><span style={{color:'red'}} className="hvr-underline-reveal">Siddharth Gupta</span></a> © 2019</span>
									</center>
								</Col>
							</Row>
						</Footer>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default App;
