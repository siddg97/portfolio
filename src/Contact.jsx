import React from 'react';
import {Card, List, Layout, Icon} from 'antd';
// import Typist from 'react-typist';

const {Header, Content} = Layout;

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
	'sga94@sfu.ca',
]

class Contact extends React.Component {
	constructor() {
    	super();
    	this.state = { textIdx: 0 };
    	this.componentDidMount = this.componentDidMount.bind(this)
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
		const cardStyle = {margin:24, padding:0}
		let dText = messages[this.state.textIdx % messages.length];
		return(
			<Layout>
				<Header className="header hvr-underline-from-right"> Get in touch with me... </Header>
				<Content style={{ margin: '24px 16px 0', padding: '24px' }}>
					<div style={{background:'#ececec', padding:15}}>
						<Card title={
							<div className='email-bg'>
								<center>
									<span className="card-header hvr-grow">
								        <b><Icon type="mail"/></b>
								       	<h3> E-Mail </h3>
							        </span>
						        </center>
					        </div>
						}
						bordered={true} 
						hoverable={true}
						style={cardStyle}
						>
							<p className="contact-card">Mail me <b style={{color:'blue'}}>{dText}</b> at:</p>
							<List
							    bordered
							    dataSource={email}
							    renderItem={item => (
							    <List.Item>
							    	<p className='contact-card'> 
							        <a href={'mailto:'+ item} className='contact-card links hvr-grow'>
							        	{item}
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
						</Card>
					</div>
				</Content>
			</Layout>
		)
	}
}

export default Contact

