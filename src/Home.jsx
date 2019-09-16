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
							<center><strong style={{fontSize:30,color:'black'}}> Welcome</strong></center>
							<Divider/>
							<Timeline mode={this.props.mode}>
								<Timeline.Item color="gray">
									<strong style={{fontSize:24, color:"gray"}}>This is my story</strong>
								</Timeline.Item>
								<Timeline.Item color="green">
									<Text strong>{""}My name is<br/><a href="http://siddg.info" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#52c41a"}}>Siddharth Gupta</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item color="green">
									<Text strong>{""}My friends call me <br/><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#52c41a", cursor:'pointer'}}>Sidd</strong></Text>
								</Timeline.Item>
								<Timeline.Item>
									<Text strong>{""}I'm currently an <br/><a href="https://www.vocabulary.com/dictionary/undergraduate" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#FF0000",cursor:'pointer'}}>Undergraduate student</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item >
									<Text strong>{""}I'm expected to graduate <br/><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#FF0000",cursor:'pointer'}}>June 2020</strong></Text>
								</Timeline.Item>
								<Timeline.Item color="#1890ff">
									<Text strong>{""}I am attending <br/><a href="https://www.sfu.ca/" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#1890ff"}}> Simon Fraser University, Canada</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item color="#1890ff">
									<Text strong>{""}Pursuing my<br/><a href="http://www.sfu.ca/computing.html" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#1890ff"}}> Bsc. Computing Science</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item color="green">
									<Text strong>{""}I am from <br/><a href="https://en.wikipedia.org/wiki/India" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#52c41a"}}>India</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item color="green">
									<Text strong>{""}Currently living in <br/><a href="https://en.wikipedia.org/wiki/Burnaby" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#52c41a"}}> Burnaby, British Columbia</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item>
									<Text strong>{""}I love to <br/><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#52c41a", cursor:'pointer'}}> Build Stuff</strong></Text>
								</Timeline.Item>
								<Timeline.Item>
									<Text strong>{""}Some say that <br/><a href="https://en.wikipedia.org/wiki/Robot" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#52c41a", cursor:'pointer'}}> I am a Robot</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item color="#1890ff">
									<Text strong>{""}Here is my <br/>
										<a href="https://docs.google.com/document/d/1U3GHViVozx8BPzE52-nt053n3f3U4MWmGGIr5X_hSyo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
											<strong style={{fontSize:24, color:"#1890ff"}} className="hvr-underline-reveal"> 
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