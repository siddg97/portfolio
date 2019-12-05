import React from "react";
import { Alert, Row, Col, Card, Divider, Icon, Layout, Timeline } from 'antd';
import Aport from './Aport.jsx';
import Pport from './Pport.jsx';
import GithubCalendar from 'react-github-calendar';
import ReactToolTip from 'react-tooltip';

const { Content } = Layout;
const skills = {
	frontend:["HTML","CSS","ReactJS","Redux","Bootstrap","UI/UX"],
	backend:["SQL","NoSQL","NodeJS","RESTful APIs","Flask","NGINX"],
	lang:["C/C++","Haskell","JavaScript","Python","MATLAB","R"],
	tools:["GitHub","Heroku","Docker","yarn","Postman","Chrome DevTools"],
	profiles:[
				['fa-github-square','https://github.com/siddg97','#211F1F'],
				['fa-stack-overflow','https://stackoverflow.com/story/sg97','#f48024'],
				['fa-linkedin-square','https://www.linkedin.com/in/siddharth-gupta-b0245b113/','#0077b5'],
				['fa-facebook-square','https://www.facebook.com/siddharth.gupta.1997','#3b5998'],
				['fa-twitter-square','https://twitter.com/siddgupta97','#1da1f2'],
				['fa-instagram','https://www.instagram.com/?hl=en','#c13584']
			]
};

class Portfolio extends React.Component {
	render(){
		const defaultTheme = {
			background: '#fff',
			text: '#0d0f05',
			grade4: '#020122',
			grade3: '#f4442e',
			grade2: '#fc9e4f',
			grade1: '#edd382',
			grade0: '#ececec',
		};
		const cardStyle = {margin:'auto',marginBottom:24,marginTop:24,padding:0, boxSizing:'border-box',width:'80vw'}
		const cardHeadStyle = {textAlign:'center',backgroundColor:'#fff'}
		const skillStyle = {marginBottom:24}
		return(
			<Layout className="l">
				<Content>
					<div style={{padding:15,backgroundColor:'#ececec'}}>
						<Card title={
							<span className="card-header">
								<b><Icon type="solution"/></b>
								<b> Personal Projects </b>
							</span>
						}
						bordered={true} 
						hoverable={false}
						style={cardStyle}
						>
							<Pport/>
							<Alert
								description="Click on expand to view full description."
								type="info"
								showIcon
								closable
							/>
						</Card>
						<Card title={
							<span className="card-header">
								<b><Icon type="project"/></b>
								<b> Academic Projects </b> - Simon Fraser University
							</span>
						}
						bordered={true} 
						hoverable={false}
						style={cardStyle}
						>
							<Aport/>
							<Alert
								description="Click on expand to view full description."
								type="info"
								showIcon
								closable
							/>
						</Card>
						<Card title={
							<span className="card-header">
								<b><Icon type="radar-chart"/></b>
								<b> Skills and Profiles </b>
							</span>
						}
						bordered={true}
						hoverable={false}
						style={cardStyle}
						>
							<Row type="flex" gutter={24} align="top" justify="center">
								<Col xs={24} sm={18} md={12} lg={12} xl={12} xxl={6}>
									<Card title={<b>Frontend</b>} style={skillStyle} headStyle={cardHeadStyle}>
										<Timeline mode="alternate">
										{
											skills.frontend.map((item,i) => 
												<Timeline.Item color="#ec6b2d" key={i}>{item}</Timeline.Item>
											)
										}
										</Timeline>
									</Card>
								</Col>
								<Col xs={24} sm={18} md={12} lg={12} xl={12} xxl={6}>
									<Card title={<b>Backend</b>} style={skillStyle} headStyle={cardHeadStyle}>
										<Timeline mode="alternate">
										{
											skills.backend.map((item,i) => 
												<Timeline.Item color="#08327d" key={i}>{item}</Timeline.Item>
											)
										}
										</Timeline>
									</Card>
								</Col>
								<Col xs={24} sm={18} md={12} lg={12} xl={12} xxl={6}>
									<Card title={<b>Languages</b>} style={skillStyle} headStyle={cardHeadStyle}>
										<Timeline mode="alternate">
										{
											skills.lang.map((item,i) => 
												<Timeline.Item color="#0095a3" key={i}>{item}</Timeline.Item>
											)
										}
										</Timeline>
									</Card>
								</Col>
								<Col xs={24} sm={18} md={12} lg={12} xl={12} xxl={6}>
									<Card title={<b>Tools</b>} style={skillStyle} headStyle={cardHeadStyle}>
										<Timeline mode="alternate">
										{
											skills.tools.map((item,i) => 
												<Timeline.Item color="#720026" key={i}>{item}</Timeline.Item>
											)
										}
										</Timeline>
									</Card>
								</Col>
							</Row>
							<Divider/>
							<Row type="flex" gutter={24} align="top" justify="center">
								<Col xs={24} sm={24} md={24}>
									<Card title={<b>Profiles</b>} style={skillStyle} headStyle={cardHeadStyle}>
										<Row type="flex" justify="center" align="middle">
										{
											skills.profiles.map((item,i) => 
												<Col xs={24} sm={24} md={12} lg={8} key={i}>
													<Card hoverable bordered={false} style={{textAlign:'center',backgroundColor:item[2],borderRadius:0,paddingRight:0,paddingLeft:0}}>
														<a href={item[1]} className="hvr-grow" target="_blank" rel="noopener noreferrer">
															<i className={"fa "+item[0]} style={{fontSize:50,color:'#fff'}}/>
														</a>
													</Card>
												</Col>
											)
										}
										</Row>
										<div style={{paddingTop:24}}>
											<Alert
												description="Click icons to view profiles."
												type="info"
												showIcon
												closable
											/>
										</div>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={24}>
									<Card title={<b>Github Contributions</b>} hoverable={true} style={skillStyle} headStyle={cardHeadStyle}>
										<center><GithubCalendar username="siddg97" blockSize={16} blockMargin={2} theme={defaultTheme} fontSize={16} style={{padding:5}}>
											<ReactToolTip delayShow={25} html />
										</GithubCalendar></center>
									</Card>
								</Col>
							</Row>							
						</Card>
					</div>
				</Content>
			</Layout>
		);
	}
}

export default Portfolio