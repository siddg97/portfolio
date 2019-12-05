import React from 'react';
import { Alert, Button, Card, Input, Row, Col, Layout,Typography, Icon} from 'antd';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import Swal from 'sweetalert2';

const {Content} = Layout;
const {Paragraph, Text} = Typography;
const {TextArea} = Input;

class ContactForm extends React.Component {
	constructor() {
		super();
		this.state = {
			name:"",
			email:"",
			subject:"",
			message:"",
			nameErr:false,
			emailErr:false,
			subErr:false,
			msgErr:false
		};

	}

	clearForm = () => {
		this.setState({
			name:"",
			email:"",
			subject:"",
			message:"",
			nameErr:false,
			emailErr:false,
			subErr:false,
			msgErr:false
		})
	};

	onInput = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		if (nam === "email"){
			if (!isEmail(val)){
				this.setState({emailErr:true});
			} else {
				this.setState({emailErr:false})
			}
		} else if(nam === "name") {
			if(val === ""){
				this.setState({nameErr:true});
			} else {
				this.setState({nameErr:false})
			}
		} else if(nam === "subject") {
			if(val === ""){
				this.setState({subErr:true});
			} else {
				this.setState({subErr:false})
			}
		} else if(nam === "message") {
			if(val === ""){
				this.setState({msgErr:true});
			} else {
				this.setState({msgErr:false})
			}
		}
		this.setState({[nam]:val});
	};

	onSubmit = (event) => {
		event.preventDefault();
		axios({
			method: "POST",
			url: "https://gsidd97.herokuapp.com/send-mail",
			headers:{
				"Content-Type": "application/json"
			},
			data: {
				name: this.state.name,
				email: this.state.email,
				subject: '[Personal Webiste]:'+this.state.subject,
				message: this.state.message
			}
		})
		.then((res) => {
			if(res.data.msg === 'success'){
				Swal.fire({
					text:'Your email has been sent! I will get back to you soon.',
					type:'success'
				})
				this.clearForm();
			} else if(res.data.msg === 'fail'){
				Swal.fire({
					type:'error',
					html:"Your message failed to be sent successfully, please try again. If problem persists, send me an email at <a href='mailto:g.sidd97@gmail.com'>g.sidd97@gmail.com</a> or message me on <a href='www.linkedin.com/in/siddg97'>LinkedIn</a>"
				});
			}
		})
		.catch((err) => {
			console.error(err.msg);
			Swal.fire({
				type: 'error',
				html: "Your message failed to be sent successfully, please try again. If problem persists, send me an email at <a href='mailto:g.sidd97@gmail.com'>g.sidd97@gmail.com</a> or message me on <a href='www.linkedin.com/in/siddg97'>LinkedIn</a>"
			});
		});
	};

	render(){
		const formStyle={marginBottom:24}
		const {nameErr,emailErr,subErr,msgErr} = this.state;
		return (
			<div>
				<Row type="flex" justify="center" gutter={8} align="middle">
					<Col xs={24} sm={6} md={4} lg={3} xl={2} style={formStyle}>
						<Icon type="mail" style={{fontSize:64}}/>
					</Col>
					<Col xs={24} sm={18} md={20} lg={14} xl={16} style={formStyle}>
						<Paragraph className="contact-card">
							If you would like to contact me, please fill and submit the form below and I will reply to your email as soon as possible.
						</Paragraph>
					</Col>
				</Row>
				<form>

					<Row type="flex" justify="center" gutter={8} align="top">
						<Col xs={24} sm={6} md={4} lg={3} xl={2} style={formStyle}>
							<span>Name<Text type="danger">*</Text></span>
						</Col>
						<Col xs={24} sm={18} md={20} lg={14} xl={16} style={formStyle}>
							<Input 
								name="name" 
								value={this.state.name} 
								onChange={this.onInput} 
								placeholder="Enter Full Name" 
								allowClear
							/>
							<br/>
							{this.state.nameErr ? <Alert message="Name is a required field" type="error" showIcon /> : null}
						</Col>
					</Row>
					<Row type="flex" justify="center" gutter={8} align="top">
						<Col xs={24} sm={6} md={4} lg={3} xl={2} style={formStyle}>
							<span>Email<Text type="danger">*</Text></span>
						</Col>
						<Col xs={24} sm={18} md={20} lg={14} xl={16} style={formStyle}>
							<Input 
								name="email" 
								value={this.state.email} 
								onChange={this.onInput} 
								placeholder="Enter Email" 
								allowClear
							/>
							<br/>
							{this.state.emailErr ? <Alert message="Null or invalid email provided" type="error" showIcon /> : null}
						</Col>
					</Row>
					<Row type="flex" justify="center" gutter={8} align="top">
						<Col xs={24} sm={6} md={4} lg={3} xl={2} style={formStyle}>
							<span>Subject<Text type="danger">*</Text></span>
						</Col>
						<Col xs={24} sm={18} md={20} lg={14} xl={16} style={formStyle}>
							<Input 
								name="subject" 
								value={this.state.subject} 
								onChange={this.onInput} 
								placeholder="Enter Subject line" 
								allowClear
							/>
							<br/>
							{this.state.subErr ? <Alert message="Subject is a required field" type="error" showIcon /> : null}
						</Col>
					</Row>
					<Row type="flex" justify="center" gutter={8} align="top">
						<Col xs={24} sm={6} md={4} lg={3} xl={2} style={formStyle}>
							<span>Message<Text type="danger">*</Text></span>
						</Col>
						<Col xs={24} sm={18} md={20} lg={14} xl={16} style={formStyle}>
							<TextArea 
								name="message" 
								value={this.state.message} 
								onChange={this.onInput} 
								placeholder="Enter Message" 
								autosize={{minRows:10,maxRows:100}} 
								required
							/>
							<br/>
							{this.state.msgErr ? <Alert message="Message is a required field" type="error" showIcon /> : null}
						</Col>
					</Row>
					<Row type="flex" justify="center" gutter={8} align="top">
						<Col xs={24} sm={6} md={4} lg={3} xl={2} style={formStyle}>
							<br/>
							<Button type='secondary' block onClick={this.clearForm}>Reset</Button>
						</Col>
						<Col xs={24} sm={18} md={20} lg={14} xl={16} style={formStyle}>
							<br/>
							<Button disabled={nameErr || emailErr || subErr || msgErr} type="primary" block onClick={this.onSubmit}>Send Message</Button>
						</Col>
					</Row>
				</form>
			</div>
		)
	}
}

class Contact extends React.Component {
	render(){
		const cardStyle = {margin:'auto',marginBottom:24,marginTop:24,width:'80vw'};
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
							<ContactForm/>
						</Card>	
					</div>
				</Content>
			</Layout>
		)
	}
}

export default Contact