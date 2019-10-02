import React, { Component } from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import {Switch as RouteSwitch} from 'react-router-dom';
import { Affix, Row, Col, Button, Drawer, Layout, Menu, Icon, BackTop, Tooltip } from 'antd';
import Home from './Home.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'

const { Footer, Header } = Layout;

const menu = [
	{
		header:"Home",
		path:"/",
		icon:"home"
	},
	{
		header:"About",
		path:"/about",
		icon:"user"
	},
	{
		header:"Portfolio",
		path:"/portfolio",
		icon:"area-chart"
	},
	{
		header:"Contact",
		path:"/contact",
		icon:"message"
	}
];

class App extends Component {
	constructor(){
		super();
		let path = window.location.pathname;
		let selectedKey = []
		let title = ""
		if (path === '/'){
			selectedKey = ['0']
			title = "Home"
		} else if (path === '/about') {
			selectedKey = ['1']
			title = "About"
		} else if (path === '/portfolio') {
			selectedKey = ['2']
			title = "Portfolio"
		} else if (path==='/contact') {
			selectedKey = ['3']
			title = "Contact"
		} else {
			selectedKey = ['0']
			title = "Home"
		}
		this.state = {
			nav: false,
			selectedKeys:selectedKey,
			title:title
		};
	}

	handleMenuClick = e => {
		this.setState({
			nav:false,
			selectedKeys:[e.key],
			title:menu[e.key].header
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
		let hmode = window.screen.width < 580 ? "left" : "alternate";
		const mItemStyle = {height:'140px',padding:24,textAlign:'center',margin:0};
		const iconStyle = {"fontSize":"50px",marginRight:0};
		const headerStyle = {height:'auto',lineHeight:0,padding:16,backgroundColor:'#2D2926FF'};
		const footerStyle = {backgroundColor:'#2D2926FF',paddingLeft:24, paddingRight:24};
		const fMenuStyle = {backgroundColor:"#2D2926FF"};
		const navStyle = {backgroundColor:"#2D2926FF",minHeight:"100vh"}
		return (
			<div className="App">
				<Tooltip title="Top of page">
					<BackTop visibilityHeight={50}>
						<Button type="primary" size='large' shape="circle"><Icon type="up-circle"/></Button>
					</BackTop>
				</Tooltip>
				<Layout>
					<Affix>
						<Header style={headerStyle}>
							<Button type="primary" size='large' shape="round" onClick={this.showNav}>
								<Icon type="menu" size="large"/>
								<span className="nav-head">{this.state.title}</span>
							</Button>
							<Drawer placement='left' closable={false} onClose={this.hideNav} visible={this.state.nav} width={144}>
								<Menu theme="dark" mode="inline" selectedKeys={this.state.selectedKeys} style={navStyle}>
									{
										menu.map((item,i) =>
											<Menu.Item key={i} onClick={this.handleMenuClick} style={mItemStyle}>
												<Link to={item.path}>
													<Icon type={item.icon} style={iconStyle} />
													<br/>
													<span className="nav_Text">{item.header}</span>
												</Link>
											</Menu.Item>
										)
									}
								</Menu>
							</Drawer>
						</Header>
					</Affix>
				<Layout>
						<RouteSwitch>
							<Route exact path="/" render={() => <Home mode={hmode}/>} />
							<Route path="/about" component={About} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/contact" component={Contact} />
						</RouteSwitch>
						<Footer style={footerStyle}>
							<Row type="flex" justify="center" align="top">
								<Col xs={24} sm={24} md={4}>
									<Menu theme="dark" mode="inline" selectedKeys={this.state.selectedKeys} style={fMenuStyle}>
										{
											menu.map((item,i) =>
												<Menu.Item key={i} onClick={this.handleMenuClick}>
													<Link to={item.path}>
														<span className="footer-nav-text">{item.header}</span>
													</Link>
												</Menu.Item>
											)
										}
									</Menu>
								</Col>
								<Col xs={24} sm={24} md={20}>
									<div style={{textAlign:'center',padding:32}}>
										<a href="https://github.com/siddg97/" className="hvr-float logo-invert" target="_blank" rel="noopener noreferrer"><Icon theme="outlined" type="github" style={{"fontSize":"40px",color:'black'}}/></a>
										<a href="https://www.facebook.com/siddharth.gupta.1997" className="hvr-float logo-invert" target="_blank" rel="noopener noreferrer"><Icon theme="filled" type="facebook" style={{"fontSize":"40px", color: 'black'}}/></a>
										<a href="https://www.linkedin.com/in/siddharth-gupta-b0245b113/" className="hvr-float logo-invert" target="_blank" rel="noopener noreferrer"><Icon theme="filled" type="linkedin" style={{"fontSize":"40px", color: 'black'}}/></a>
										<br/><br/>
										<span style={{color:'#fff',fontSize:16}}>Created with <Icon type="heart" theme="filled" style={{color:'red',fontSize:28}} className="hvr-pop"/> by - <a href="http://siddg.info" target="_blank" rel="noopener noreferrer">Siddharth Gupta</a> © 2019</span><br/>
										<span style={{color:'#fff',fontSize:16}}> Powered by <a href="https://ant.design/" target="_blank" rel="noreferrer noopener">Antd{" "}<Icon type="ant-design" style={{color:"white",fontSize:28}} className="hvr-pop"/></a></span>
										<br/>
										<span style={{color:'#fff',fontSize:10,bottom:0}}> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></span>
									</div>
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
