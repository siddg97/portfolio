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
						       	<b> Miscellaneous </b>
					        </span>
						}
						bordered={true} 
						hoverable={true}
						style={cardStyle}
						>
							<Row type="flex"gutter={24}>
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