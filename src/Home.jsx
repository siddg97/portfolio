import React from 'react';
import { Layout, Typography, Timeline, Divider} from 'antd';

const {Content} = Layout;
const {Text} = Typography;

class Home extends React.Component {
	render(){
		return(
			<Layout className="l">
				<Content>
					<div style={{paddingTop:'32px',paddingBottom:'32px',backgroundColor:'#ececec'}}>
						<div style={{padding:30,backgroundColor:'#fff',margin:'auto',marginBottom:2,width:'80vw'}}>
							<center><strong style={{fontSize:30,color:'black'}}>This is my story</strong></center>
							<Divider/>
							<Timeline mode={this.props.mode}>
								<Timeline.Item color="#ec6b2d">
									<Text strong>{""}My name is<br/><a href="http://siddg.info/" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#ec6b2d"}}>Siddharth Gupta</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item color="#ec6b2d">
									<Text strong>{""}My friends call me <br/><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#ec6b2d", cursor:'pointer'}}>Sidd</strong></Text>
								</Timeline.Item>
								<Timeline.Item color="#0d0f05">
									<Text strong>{""}I'm currently an <br/><a href="https://www.vocabulary.com/dictionary/undergraduate" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#0d0f05",cursor:'pointer'}}>Undergraduate student</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item color="#0d0f05">
									<Text strong>{""}Expected to graduate <br/><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#0d0f05",cursor:'pointer'}}>June 2020</strong></Text>
								</Timeline.Item>
								<Timeline.Item color="#1890ff">
									<Text strong>{""}I am attending <br/><a href="https://www.sfu.ca/" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#1890ff"}}> Simon Fraser University</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item color="#1890ff">
									<Text strong>{""}Pursuing my bachelors in<br/><a href="http://www.sfu.ca/computing.html" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#1890ff"}}>Computing Science</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item color="green">
									<Text strong>{""}I am from <br/><a href="https://en.wikipedia.org/wiki/India" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#52c41a"}}>India</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item color="green">
									<Text strong>{""}Currently living in <br/><a href="https://en.wikipedia.org/wiki/Burnaby" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#52c41a"}}> Burnaby</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item>
									<Text strong>{""}I am a <br/><a href="https://en.wikipedia.org/wiki/Software_engineer" target="_blank" rel="noopener noreferrer"><strong className="hvr-underline-reveal" style={{fontSize:24, color:"#FF0000", cursor:'pointer'}}>Software Developer</strong></a></Text>
								</Timeline.Item>
								<Timeline.Item>
									<Text strong>{""}Here is my <br/>
										<a href="https://docs.google.com/document/d/1U3GHViVozx8BPzE52-nt053n3f3U4MWmGGIr5X_hSyo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
											<strong style={{fontSize:24, color:"#FF0000",cursor:'pointer'}} className="hvr-underline-reveal"> 
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