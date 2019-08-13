import React from "react";
import { Layout,Collapse } from 'antd';
import Aport from './Aport.jsx';
import Pport from './Pport.jsx';
import GithubCalendar from 'react-github-calendar';
import ReactToolTip from 'react-tooltip';


const { Panel } = Collapse;
const { Header,Content } = Layout;

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
		return(
			<Layout className="l">
				<Header className="hvr-underline-from-right header" style={{fontSize:'30px'}}> Portfolio </Header>
				<Content>
					<Collapse defaultActiveKey="1">
						<Panel header="Github Contributions" key="1">
							<div style={{padding:'16px'}}>
								<center>
									<GithubCalendar username="siddg97" blockSize={12} blockMargin={2} theme={defaultTheme} fontSize={18}>
										<ReactToolTip delayShow={25} html />
									</GithubCalendar>
								</center>
							</div>
						</Panel>
						<Panel header="Academic Projects" key="2">
							<div style={{padding:'16px',backgroundColor:'#ececec'}}>
								<Aport/>
							</div>
						</Panel>
						<Panel header="Personal Projects" key="3">
							<div style={{padding:'16px',backgroundColor:'#ececec'}}>
								<Pport/>
							</div>
						</Panel>
					</Collapse>
				</Content>
			</Layout>
		);
	}
}

export default Portfolio