import React from "react";
import { Tabs } from 'antd';
import Aport from './Aport.jsx';
import Pport from './Pport.jsx';

const { TabPane } = Tabs;

class Portfolio extends React.Component {
	render(){
		return(
			<Tabs defaultActiveKey="2" size="large" tabBarGutter={10} style={{minHeight:"87.8vh"}}>
			    <TabPane
			    	tab={
			        	<span>
			    			Personal Projects
			    		</span>
			    	}
			    	key="1"
			    >
			    	<Pport />	
			    </TabPane>
			    <TabPane 
			    	tab={
			    		<span>
				          Academic Projects
				        </span>
			    	}
			    	key="2"
			    >
			    	<Aport/>
			    </TabPane>
			</Tabs>
		);
	}
}

export default Portfolio