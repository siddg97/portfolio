import React from "react";
import { Card, Icon, Layout } from 'antd';
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
							<span className="card-header hvr-pulse">
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
							<span className="card-header hvr-pulse">
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
							<span className="card-header hvr-pulse">
						        <b><Icon type="github"/></b>
						       	<b> Github Contributions </b>
					        </span>
						}
						bordered={true} 
						hoverable={true}
						style={cardStyle}
						>
							<center>
								<GithubCalendar username="siddg97" blockSize={12} blockMargin={2} theme={defaultTheme} fontSize={18}>
									<ReactToolTip delayShow={25} html />
								</GithubCalendar>
							</center>
						</Card>
					</div>
				</Content>
			</Layout>
		);
	}
}

export default Portfolio