import React from 'react';
import { Alert, Card, Layout, Typography, Timeline } from 'antd';

const {Content} = Layout;
const {Text} = Typography;

const story = [
	{
		text:"My name is",
		link:"http://siddg.info/",
		header:"Siddharth Gupta",
		color:"#ec6b2d"
	},
	{
		text:"People also call me",
		link:"http://siddg.info/",
		header:"Sidd",
		color:"#ec6b2d"
	},
	{
		text:"I'm currently an",
		link:"https://www.vocabulary.com/dictionary/undergraduate",
		header:"Undergraduate student",
		color:"#0d0f05"
	},
	{
		text:"Expected to graduate",
		link:"https://www.calendar-365.com/calendar/2020/June.html",
		header:"June 2020",
		color:"#0d0f05"
	},
	{
		text:"I am attending",
		link:"https://www.sfu.ca/",
		header:"Simon Fraser University",
		color:"#1890ff"
	},
	{
		text:"Pursuing my bachelors in",
		link:"http://www.sfu.ca/computing.html",
		header:"Computing Science",
		color:"#1890ff"
	},
	{
		text:"I am from",
		link:"https://en.wikipedia.org/wiki/India",
		header:"India",
		color:"#52c41a"
	},
	{
		text:"Currently living in",
		link:"https://en.wikipedia.org/wiki/Burnaby",
		header:"Burnaby",
		color:"#52c41a"
	},
	{
		text:"I am a",
		link:"https://en.wikipedia.org/wiki/Software_engineer",
		header:"Software Developer",
		color:"red"
	},
	{
		text:"Here is my",
		link:"https://docs.google.com/document/d/1U3GHViVozx8BPzE52-nt053n3f3U4MWmGGIr5X_hSyo/edit?usp=sharing",
		header:"Resume",
		color:"red"
	},
];

class Home extends React.Component {
	render(){
		const wrapperStyle = {paddingTop:32, paddingBottom:32, backgroundColor:'#ececec'};
		const cardStyle = {margin:'auto',marginBottom:24,marginTop:24,width:'80vw'}
		return(
			<Layout className="l">
				<Content>
					<div style={wrapperStyle}>
						<Card title={<center><strong style={{fontSize:30}}>This is my story</strong></center>}
							bordered={true}
							hoverable={true}
							style={cardStyle}
						>
							<Timeline mode={this.props.mode}>
								{
									story.map((item,i) => 
										<Timeline.Item color={item.color} key={i}>
											<Text strong>
												{item.text}<br/>
												<a href={item.link} target="_blank" rel="noopener noreferrer">
													<strong className="hvr-underline-reveal" style={{fontSize:24,color:item.color,cursor:'pointer'}}>
														{item.header}
													</strong>
												</a>
											</Text>
										</Timeline.Item>
									)
								}
							</Timeline>
							<Alert
								description="Colored texts are hyperlinks."
								type="info"
								showIcon
								closable
							/>
						</Card>
					</div>
				</Content>
			</Layout>
		)
	}
}

export default Home