import React from "react"
import { Tabs, Icon, Layout, Typography} from 'antd';

const { Paragraph } = Typography;
const { TabPane } = Tabs;
const { Header, Content } = Layout

class Pport extends React.Component {
	render(){
		return(
			<Tabs defaultActiveKey="1" size="large" tabBarGutter={10} tabPosition={'left'} style={{minHeight:"87.8vh"}}>
			    <TabPane
			      tab={
			        <span>
			          <Icon type="bg-colors" />
			          colorP
			        </span>
			      }
			      key="1"
			    >

			    </TabPane>
			    <TabPane
			      tab={
			        <span>
			          <Icon type="cloud" />
			          CasterBot
			        </span>
			      }
			      key="2"
			    >

			    </TabPane>
			    <TabPane
			      tab={
			        <span>
			          <Icon type="experiment" />
			          Letwork
			        </span>
			      }
			      key="3"
			    >

			    </TabPane>
			</Tabs>
		);
	}
}

export default Pport