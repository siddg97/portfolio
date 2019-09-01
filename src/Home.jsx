import React from 'react';
import {Layout, Typography, Timeline, Divider} from 'antd';

const {Content} = Layout;
const {Text} = Typography;

class Home extends React.Component {
	render(){
		return(
			<Layout className="l">
				<Content>
					<div style={{padding:25,backgroundColor:'#ececec'}}>
						<div style={{padding:30,backgroundColor:'#fff'}}>
							<center><span style={{fontSize:'30px',padding:0,color:'black','fontWeight':20}}> Welcome</span></center>
							<Divider/>
							<Timeline mode={this.props.mode}>
								<Timeline.Item color="gray">
									<strong style={{fontSize:24, color:"gray"}}>This is my story</strong>
								</Timeline.Item>
								<Timeline.Item color="green">
									<Text strong>{""}My name is<br/><strong style={{fontSize:24, color:"#52c41a"}}>Siddharth Gupta</strong></Text>
								</Timeline.Item>
								<Timeline.Item color="green">
									<Text strong>{""}My friends call me <br/> <strong style={{fontSize:24, color:"#52c41a"}}>Sidd</strong></Text>
								</Timeline.Item>
								<Timeline.Item>
									<Text strong>{""}I'm currently an <br/><strong style={{fontSize:24, color:"#FF0000"}}>Undergraduate student</strong></Text>
								</Timeline.Item>
								<Timeline.Item >
									<Text strong>{""}I'm expected to graduate <br/><strong style={{fontSize:24, color:"#FF0000"}}>June 2020</strong></Text>
								</Timeline.Item>
								<Timeline.Item color="#1890ff">
									<Text strong>{""}I am attending <br/><strong style={{fontSize:24, color:"#1890ff"}}> Simon Fraser University, CA</strong></Text>
								</Timeline.Item>
								<Timeline.Item color="#1890ff">
									<Text strong>{""}Pursuing my<br/><strong style={{fontSize:24, color:"#1890ff"}}> Bsc. Computing Science</strong></Text>
								</Timeline.Item>
								<Timeline.Item color="green">
									<Text strong>{""}I am from <br/><strong style={{fontSize:24, color:"#52c41a"}}>India</strong></Text>
								</Timeline.Item>
								<Timeline.Item color="green">
									<Text strong>{""}Currently living in <br/><strong style={{fontSize:24, color:"#52c41a"}}> Burnaby, BC, CA</strong></Text>
								</Timeline.Item>
								<Timeline.Item>
									<Text strong>{""}I love to <br/><strong style={{fontSize:24, color:"#FF0000"}}> Build Stuff</strong></Text>
								</Timeline.Item>
								<Timeline.Item>
									<Text strong>{""}One could say that <br/><strong style={{fontSize:24, color:"#FF0000"}}> I am a builder</strong></Text>
								</Timeline.Item>
								<Timeline.Item color="#1890ff">
									<Text strong>{""}Here is my <br/>
										<a href="https://docs.google.com/document/d/1U3GHViVozx8BPzE52-nt053n3f3U4MWmGGIr5X_hSyo/edit?usp=sharing" className="hvr-pulse" target="_blank" rel="noopener noreferrer">
											<strong style={{fontSize:24, color:"#1890ff"}}> 
												Resume
											</strong>
										</a>
									</Text>
								</Timeline.Item>
							</Timeline>
						</div>
					</div>
				</Content>
			</Layout>
		)
	}
}

export default Home