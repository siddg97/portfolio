import React from "react";
import { Layout,Collapse } from 'antd';
import Aport from './Aport.jsx';
import Pport from './Pport.jsx';

const { Panel } = Collapse;
const { Header,Content } = Layout;

class Portfolio extends React.Component {
	render(){
		return(
			<Layout className="l">
				<Header className="hvr-underline-from-right header" style={{fontSize:'30px'}}> Portfolio </Header>
				<Content>
					<Collapse accordion >
						<Panel header="Academic Projects" key="1">
							<Aport/>
						</Panel>
						<Panel header="Personal Projects" key="2">
							<Pport/>
						</Panel>
					</Collapse>
				</Content>
			</Layout>
		);
	}
}

export default Portfolio