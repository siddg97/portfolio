import React from "react";
import { Row, Col, Card, Icon, Layout, Tag } from 'antd';
import Aport from './Aport.jsx';
import Pport from './Pport.jsx';
import GithubCalendar from 'react-github-calendar';
import ReactToolTip from 'react-tooltip';

const { Content } = Layout;

class Portfolio extends React.Component {
	render(){
		const defaultTheme = {
			background: '#fff',
			text: '#000',
			grade4: '#00008B',
			grade3: '#1E90FF',
			grade2: '#00BFFF',
			grade1: '#B0E0E6',
			grade0: '#ececec',
		};
		const cardStyle = {margin:10, padding:0, boxSizing:'border-box'}
		return(
			<Layout className="l">
				<Content>
					<div style={{padding:15,backgroundColor:'#ececec'}}>
						<Card title={
							<span className="card-header hvr-bounce-out">
						        <b><Icon type="project"/></b>
						       	<b> Academic Projects </b>
					        </span>
						}
						bordered={true} 
						hoverable={true}
						style={cardStyle}
						>
							<Aport/>
						</Card>

						<Card title={
							<span className="card-header hvr-bounce-out">
						        <b><Icon type="solution"/></b>
						       	<b> Personal Projects </b>
					        </span>
						}
						bordered={true} 
						hoverable={true}
						style={cardStyle}
						>
							<Pport/>
						</Card>
						<Card title={
							<span className="card-header hvr-bounce-out">
						        <b><Icon type="radar-chart"/></b>
						       	<b> Skills and Misc </b>
					        </span>
						}
						bordered={true} 
						hoverable={true}
						style={cardStyle}
						>
							<Row type="flex"gutter={24}>
								<Col xs={24} sm={24} md={24}>
									<Card title={<center><span>Programming Languages</span></center>} bordered={true} hoverable={true} style={{'marginBottom':15}}>
										<center>
											<Tag color="#f50"> bash </Tag>
											<Tag color="#f50"> C </Tag>
											<Tag color="#f50"> C++</Tag>
											<Tag color="#f50"> CSS </Tag>
											<Tag color="#f50"> Go </Tag>
											<Tag color="#f50"> Haskell </Tag>
											<Tag color="#f50"> HTML </Tag>
											<Tag color="#f50"> JavaScript </Tag>
											<Tag color="#f50"> Markdown </Tag>
											<Tag color="#f50"> MATLAB </Tag>
											<Tag color="#f50"> Prolog </Tag>
											<Tag color="#f50"> Scheme </Tag>
											<Tag color="#f50"> SQL </Tag>
											<Tag color="#f50"> Swift </Tag>
										</center>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={24}>
									<Card title={<center><span>Operating Systems</span></center>} bordered={true} hoverable={true} style={{'marginBottom':15}}>
										<center>
											<Tag color="#2db7f5">Android</Tag>
											<Tag color="#2db7f5">iOS</Tag>
											<Tag color="#2db7f5">Linux</Tag>
											<Tag color="#2db7f5">MacOS</Tag>
											<Tag color="#2db7f5">Windows</Tag>
										</center>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={24}>
									<Card title={<center><span>Tools, Frameworks & Libraries</span></center>} bordered={true} hoverable={true} style={{'marginBottom':15}}>
										<center>
											<Tag color="#108ee9">Bootstrap</Tag>
											<Tag color="#108ee9">Github</Tag>
											<Tag color="#108ee9">Heroku</Tag>
											<Tag color="#108ee9">Node.js</Tag>
											<Tag color="#108ee9">gdb</Tag>
											<Tag color="#108ee9">pdb</Tag>
											<Tag color="#108ee9">minisat</Tag>
											<Tag color="#108ee9">Postman</Tag>
											<Tag color="#108ee9">React</Tag>
											<Tag color="#108ee9">Redux</Tag>
											<Tag color="#108ee9">Sublime Text</Tag>
											<Tag color="#108ee9">Jupyter Notebooks</Tag>
											<Tag color="#108ee9">Flask</Tag>
											<Tag color="#108ee9">Express</Tag>
											<Tag color="#108ee9">MongoDB</Tag>
											<Tag color="#108ee9">Docker</Tag>
											<Tag color="#108ee9">Redis</Tag>
											<Tag color="#108ee9">Xcode</Tag>
										</center>
									</Card>
								</Col>
								<Col xs={24}>
									<Card title={<center><span>Open Source contributions - Github</span></center>} bordered={true} hoverable={true} style={{'marginBottom':15}}>
										<center>
											<GithubCalendar username="siddg97" blockSize={12} blockMargin={2} theme={defaultTheme} fontSize={18}>
												<ReactToolTip delayShow={25} html />
											</GithubCalendar>
										</center>
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