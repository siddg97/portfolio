import React from 'react';
import {Card, List, Layout,Typography, Icon} from 'antd';
// import Typist from 'react-typist';

const {Header, Content} = Layout;
const {Paragraph, Text} = Typography;


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
	'g.sidd97@gmail.com'
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
	    }, 2500);
  	}

  	componentDidUnmount() {
	    clearInterval(this.timeout);
	}

	render(){
		const cardStyle = {margin:16, padding:0, boxSizing:'border-box'}
		let dText = messages[this.state.textIdx % messages.length];
		return(
			<Layout>
				<Header className="header hvr-underline-from-right"> Lets get in touch! </Header>
				<Content >
					<div style={{background:'#ececec', padding:15}}>
						<Card title={
							<div className='email-bg' style={{margin:0, boxSizing:'border-box'}}>
								<center>
									<span className="hvr-grow card-header">
								        <b><Icon type="mail"/></b>
								       	<h3> Email </h3>
							        </span>
						        </center>
					        </div>
						}
						bordered={false} 
						hoverable={false}
						style={cardStyle}
						>
							<Paragraph className="contact-card">Mail me <b style={{color:'blue'}}>{dText}</b> at:</Paragraph>
							<List
							    bordered
							    dataSource={email}
							    renderItem={item => (
							    <List.Item>
							    	<p className='contact-card'> 
							        <a href={'mailto:'+ item}  rel="noopener noreferrer" className='contact-card links hvr-grow' target='_blank'>
							        	gsidd97@gmail
							        </a>
							        </p>
							    </List.Item>
							    )}
							/>
						</Card>
						<Card title={
							<div className='forum-bg'>
								<center>
									<span className="card-header hvr-grow">
								        <b><Icon type="bars"/></b>
								       	<h3> Forums </h3>
							        </span>
						        </center>
					       	</div>
						} 
						bordered={true} 
						hoverable={true}
						style={cardStyle}>
							<List
							    bordered
							    dataSource={forums}
							    renderItem={item => (
							    <List.Item>
							    	<p className='contact-card'>
							        <a href={item[1]}  rel="noopener noreferrer" className='contact-card links hvr-grow' target='_blank'>
							        	{item[0]}
							        </a>
							        </p>
							    </List.Item>
							    )}
							/>
						</Card>
						<Card title={
							<div className='sm-bg'>
								<center>
									<span className="card-header hvr-grow">
								        <b><Icon type="team"/></b>
								       	<h3> Social Media </h3>
							        </span>
						        </center>
					      	</div>
						} 
						bordered={true}
						hoverable={true}
						style={cardStyle}>
							<List
							    bordered
							    dataSource={social}
							    renderItem={item => (
							    <List.Item>
							    	<p className='contact-card'>
							        <a href={item[1]}  rel="noopener noreferrer" className='contact-card links hvr-grow' target='_blank'>
							        	{item[0]}
							        </a>
							        </p>
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