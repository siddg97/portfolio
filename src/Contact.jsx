import React from 'react';
import {Card, List, Layout,Typography, Icon} from 'antd';

const {Content} = Layout;
const {Paragraph} = Typography;


const messages = [
	'saying hi!',
	'hello!',
	'hola!',
	'namaste!',
	'regarding literally anything. Really!',
	'well, not anything. But most things',
	'like this :)',
	'or this :D',
	'but no spams please!',
	'asking about specific topics',
	'for just-saying-hi',
	'for hiring me',
	'for help',
	'or-I-really-like-your-website',
	'ok, I\'ll-stop-distracting-you-now',
	'thanks for reading!',
	'hope you had geat time here!'
];

const email = [
	'g.sidd97@gmail.com',
	'sg8797@gmail.com',
];

const forums = [
	['Github','https://github.com/siddg97'],
	['StackOverflow','https://stackoverflow.com/users/11591930/giddharthsupta'],
	['LinkedIn','https://www.linkedin.com/in/siddharth-gupta-b0245b113/']
];

const social = [
	['Facebook','https://www.facebook.com/siddharth.gupta.1997'],
	['Twitter','https://twitter.com/siddgupta97'],
	['Instagram','https://www.instagram.com/?hl=en']
]


class Contact extends React.Component {
	constructor() {
    	super();
    	this.state = { textIdx: 0 };
	}

	componentDidMount() {
	    this.timeout = setInterval(() => {
	    	let currentIdx = this.state.textIdx;
	      	this.setState({ textIdx: currentIdx + 1 });
	    }, 1500);
  	}

  	componentWillUnmount() {
	    clearInterval(this.timeout);
	}

	render(){
		const cardStyle = {margin:10, padding:0, boxSizing:'border-box'}
		let dText = messages[this.state.textIdx % messages.length];
		return(
			<Layout className="l">
				<Content >
					<div style={{background:'#ececec', padding:15}}>
						<Card title={
							<span className="card-header hvr-pulse">
						        <b><Icon type="mail"/></b>
						       	<b> Email </b>
					        </span>
						}
						bordered={true} 
						hoverable={true}
						style={cardStyle}
						>
							<Paragraph className="contact-card">Mail me <b style={{color:'blue'}}>{dText}</b> at:</Paragraph>
							<List
							    bordered
							    dataSource={email}
							    renderItem={item => (
							    <List.Item>
							    	<Paragraph className='contact-card hvr-grow'>
							        <a href={'mailto:'+ item}  rel="noopener noreferrer" target='_blank'>
							        	{item}
							        </a>
							        </Paragraph>
							    </List.Item>
							    )}
							/>
						</Card>
						<Card title={
							<span className="card-header hvr-pulse">
						        <b><Icon type="bars"/></b>
						       	<b> Forums </b>
					        </span>
						} 
						bordered={true} 
						hoverable={true}
						style={cardStyle}>
							<List
							    bordered
							    dataSource={forums}
							    renderItem={item => (
							    <List.Item>
							    	<Paragraph className='contact-card hvr-grow'>
							        <a href={item[1]}  rel="noopener noreferrer" target='_blank'>
							        	{item[0]}
							        </a>
									</Paragraph>
							    </List.Item>
							    )}
							/>
						</Card>
						<Card title={
							<span className="card-header hvr-pulse">
						        <b><Icon type="team"/></b>
						       	<b> Social Media </b>
					        </span>
						} 
						bordered={true}
						hoverable={true}
						style={cardStyle}>
							<List
							    bordered
							    dataSource={social}
							    renderItem={item => (
							    <List.Item>
							    	<Paragraph className='contact-card hvr-grow'>
							        <a href={item[1]}  rel="noopener noreferrer" target='_blank'>
							        	{item[0]}
							        </a>
							        </Paragraph>
							    </List.Item>
							    )}
							/>
						</Card>
					</div>
				</Content>
			</Layout>
		)
	}
}

export default Contact