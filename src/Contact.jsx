import React from 'react';
import { Button, Card, Row, Col, Layout,Typography, Icon} from 'antd';

const {Content} = Layout;
const {Paragraph} = Typography;


const messages = [
	'saying hi!',
	'hello!',
	'namaste!',
	'regarding literally anything. Really!',
	'well, not anything. But most things',
	'like this :)',
	'or this :D',
	'but no spams please!',
	'ask about specific topics',
	'or just-saying-hi',
	'or hiring me',
	'for help',
	'or-I-really-like-your-website',
	'ok, I\'ll-stop-distracting-you-now',
	'thanks for reading.',
	'Hope you had geat time here!'
];

const email = [
	'g.sidd97@gmail.com',
	'sg8797@gmail.com',
	'sga94@sfu.ca'
];

const social = [
	['LinkedIn','https://www.linkedin.com/in/siddharth-gupta-b0245b113/'],
	['Facebook','https://www.facebook.com/siddharth.gupta.1997'],
	['Twitter','https://twitter.com/siddgupta97']
];

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
		const cardStyle = {margin:'auto',marginBottom:24,marginTop:24,width:'80vw'}
		let dText = messages[this.state.textIdx % messages.length];
		const wrapperStyle = {paddingTop:32, paddingBottom:32, backgroundColor:'#ececec'}
		return(
			<Layout className="l">
				<Content>
					<div style={wrapperStyle}>
						<Card title={
							<span className="card-header hvr-pulse">
						        <b><Icon type="swap"/></b>
						       	<b> Lets get in touch! </b>
					        </span>
						}
						bordered={true} 
						hoverable={true}
						style={cardStyle}
						>
							<Row type="flex">
								<Col xs={24} sm={24} style={{padding:16}}>
									<Paragraph className="contact-card">
										Send me an email <b style={{color:'blue'}}>{dText}</b>
									</Paragraph>
								</Col>
							</Row>
						</Card>	
						<Card title={
							<span className="card-header">
						        <b><Icon type="mail"/></b>
						       	<b> Email </b>
					        </span>
						}
						bordered={true} 
						hoverable={true}
						style={cardStyle}
						>
							<Row type="flex" gutter={24} align="middle">
							{
								email.map((item,i) => 
									<Col xs={24} sm={24} key={i} style={{padding:16}}>
										<Button type="primary" href={'mailto:'+item}>
											{item}
											<Icon type="caret-right"/>
										</Button>
									</Col>
								)
							}
							</Row>
						</Card>
						<Card title={
							<span className="card-header">
						        <b><Icon type="team"/></b>
						       	<b> Social Networks </b>
					        </span>
						}
						bordered={true} 
						hoverable={true}
						style={cardStyle}
						>
							<Row type="flex" gutter={24} align="middle" justify="center">
							{
								social.map((item,i) =>
									<Col xs={24} sm={24} key={i} style={{padding:16}}>
										<Button type="primary" href={item[1]} target="_blank" shape="round">
											{item[0]}
											<Icon type="arrow-right"/>
										</Button>
									</Col>
								)
							}
							</Row>
						</Card>
					</div>
				</Content>
			</Layout>
		)
	}
}

export default Contact