import React from "react"
import { Tabs, Icon, Layout, Divider, Radio } from 'antd';

//const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;
const { Content } = Layout
class Portfolio extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      mode: 'top',
	    };
	}

	handleModeChange = e => {
	    const mode = e.target.value;
	    this.setState({ mode });
	};

	render(){
		const { mode } = this.state;
		return(
			 <Layout>
			 	<Content style={{ margin: '24px 16px 0', padding: '24px' }}>
			 		<p>Layout: </p>
			        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: "15px" }}>
			          <Radio.Button value="top">Horizontal</Radio.Button>
			          <Radio.Button value="left">Vertical</Radio.Button>
			          <Divider/>
			        </Radio.Group>
			        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: "100vh" }}>
			           	<TabPane tab={
			           		<span style={{fontFamily:"Poppins"}}>
			          			<Icon type="loading" style={{"fontSize":"25px"}} />
			         				Project 1
			        			</span>
			        		}key="1">
			              Content of tab 1
			            </TabPane>
			            <TabPane tab={
			           		<span style={{fontFamily:"Poppins"}}>
			          			<Icon type="loading" style={{"fontSize":"25px"}} />
			         				Project 2
			        			</span>
			        		}key="2">
			              Content of tab 2
			            </TabPane>
			            <TabPane tab={
			           		<span style={{fontFamily:"Poppins"}}>
			          			<Icon type="loading" style={{"fontSize":"25px"}} />
			         				Project 3
			        			</span>
			        		}key="3">
			              Content of tab 3
			            </TabPane>
			            <TabPane tab={
			           		<span style={{fontFamily:"Poppins"}}>
			          			<Icon type="loading" style={{"fontSize":"25px"}} />
			         				Project 4
			        			</span>
			        		}key="4">
			              Content of tab 4
			            </TabPane>
			            <TabPane tab={
			           		<span style={{fontFamily:"Poppins"}}>
			          			<Icon type="loading" style={{"fontSize":"25px"}} />
			         				Project 5
			        			</span>
			        		}key="5">
			              Content of tab 5
			            </TabPane>
			            <TabPane tab={
			           		<span style={{fontFamily:"Poppins"}}>
			          			<Icon type="loading" style={{"fontSize":"25px"}} />
			         				Project 6
			        			</span>
			        		}key="6">
			              Content of tab 6
			            </TabPane>
			            <TabPane tab={
			           		<span style={{fontFamily:"Poppins"}}>
			          			<Icon type="loading" style={{"fontSize":"25px"}} />
			         				Project 7
			        			</span>
			        		}key="7">
			              Content of tab 7
			            </TabPane>
			            <TabPane tab={
			           		<span style={{fontFamily:"Poppins"}}>
			          			<Icon type="loading" style={{"fontSize":"25px"}} />
			         				Project 8
			        			</span>
			        		}key="8">
			              Content of tab 8
			            </TabPane>
			            <TabPane tab={
			           		<span style={{fontFamily:"Poppins"}}>
			          			<Icon type="loading" style={{"fontSize":"25px"}} />
			         				Project 9
			        			</span>
			        		}key="9">
			              Content of tab 9
			            </TabPane>
			        </Tabs>
		        </Content>
		    </Layout>
		);
	}
}

export default Portfolio