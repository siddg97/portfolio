import React from "react";
import { Tabs } from 'antd';
import Aport from './Aport.jsx';
import Pport from './Pport.jsx';

const { TabPane } = Tabs;

class Portfolio extends React.Component {
	render(){
		return(
			<Tabs size="large" tabBarGutter={10} style={{minHeight:"87.8vh"}}>
			    <TabPane 
			    	tab={
			    		<span>
				          Academic Projects
				        </span>
			    	}
			    	key="1"
			    >
			    	<Aport/>
			    </TabPane>
			    <TabPane
			    	tab={
			        	<span>
			    			Personal Projects
			    		</span>
			    	}
			    	key="2"
			    >
			    	<Pport />	
			    </TabPane>
			</Tabs>
		);
	}
}

export default Portfolio