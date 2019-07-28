import React from 'react';
import {Layout, Typography, Timeline} from 'antd';

const {Header, Content} = Layout;
const {Text} = Typography;

class Home extends React.Component {
	// constructor(props){
	// 	super(props);
	// }
	render(){
		return(
			<Layout className="l">
				<Header className="hvr-underline-from-right header" style={{fontSize:'30px'}}> My Story</Header>
	            <Content className="h-timeline">
	              	<Timeline mode={this.props.mode}>
	              		<Timeline.Item color="black">
	              			<strong style={{fontSize:20, color:"black"}}>Hi !</strong>
	              		</Timeline.Item>
	              		<Timeline.Item color="green">
	              			<Text strong>{"  "}My name is  <br/><strong style={{fontSize:20, color:"#52c41a"}}>Siddharth Gupta</strong></Text>
	              		</Timeline.Item>
	              		<Timeline.Item color="green">
	              			<Text strong>{"  "}My friends call me <br/> <strong style={{fontSize:20, color:"#52c41a"}}>Sidd</strong></Text>
	              		</Timeline.Item>
	              		<Timeline.Item>
	              			<Text strong>{"  "}I'm currently an <br/><strong style={{fontSize:20, color:"#FF0000"}}>Undergraduate student</strong></Text>
	              		</Timeline.Item>
	              		<Timeline.Item >
	              			<Text strong>{"  "}I'm expected to graduate <br/><strong style={{fontSize:20, color:"#FF0000"}}>June 2020</strong></Text>
	              		</Timeline.Item>
	              		<Timeline.Item color="black">
	              			<Text strong>{"  "}I am attending <br/><strong style={{fontSize:20, color:"#1890ff"}}> Simon Fraser University, CA</strong></Text>
	              		</Timeline.Item>
	              		<Timeline.Item color="black">
	              			<Text strong>{"  "}Pursuing my<br/><strong style={{fontSize:20, color:"#1890ff"}}> Bsc. Computing Science</strong></Text>
	              		</Timeline.Item>
	              		<Timeline.Item color="green">
	              			<Text strong>{"  "}I am from <br/><strong style={{fontSize:20, color:"#52c41a"}}>India</strong></Text>
	              		</Timeline.Item>
	              		<Timeline.Item color="green">
	              			<Text strong>{"  "}Currently living in <br/><strong style={{fontSize:20, color:"#52c41a"}}> Burnaby, BC, CA</strong></Text>
	              		</Timeline.Item>
	              		<Timeline.Item>
	              			<Text strong>{"  "}I love to <br/><strong style={{fontSize:20, color:"#FF0000"}}> Build Stuff</strong></Text>
	              		</Timeline.Item>
	              		<Timeline.Item>
	              			<Text strong>{"  "}One could say that <br/><strong style={{fontSize:20, color:"#FF0000"}}> I am a builder</strong></Text>
	              		</Timeline.Item>
	              		<Timeline.Item color="black">
	              			<Text strong>{"  "}Here is my <br/>
		              			<a href="https://docs.google.com/document/d/14Z7tUfuLhwx0lKbJViNPtkLvyQ2UkHJis1XB7bExJeI/edit?usp=sharing" className="hvr-pulse" target="_blank" rel="noopener noreferrer">
		              				<strong style={{fontSize:20, color:"#1890ff"}}> 
		              					Resume
		              				</strong>
		              			</a>
	              			</Text>
	              		</Timeline.Item>
	              	</Timeline>
	            </Content>
	        </Layout>
		)
	}
}

export default Home