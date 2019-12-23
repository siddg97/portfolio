import React from 'react'
import {
	Form,
	Container,
	Header,
	Button,
	Icon
} from 'semantic-ui-react';
import axios from 'axios';
import Swal from 'sweetalert2';

import { ThemeContext } from '../_context/store.js';

const DIV = ({children}) => (
	<div style={{padding:'0 0 24px 0'}}>
		{children}
	</div>
)

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
			errors:{}
		};
	}

	handleChange = (e, { name, value }) => this.setState({ [name]: value })
	
	resetForm = () => this.setState({
		name: '',
		email: '',
		subject: '',
		message: '',
		errors:{}
	});

	sendMessage = () => {
		const { name, email, subject, message } = this.state;
		const data = { name, email, subject, message };
		
		const successAlert = {
			text: 'Your message has been sent! I will get back to you on my first convinience',
			type: 'success'
		};
		const errorAlert = {
			type: 'error',
			html: 'Your message failed to send. Please try again in some time.'
		};

		axios({
			method: "POST",
			url: 'http://localhost:5000/send-mail',
			headers:{
				"Content-Type": "application/json"
			},
			data: data,
		})
		.then((res) => {
			if(res.data.msg === 'success'){
				Swal.fire(successAlert);
				this.resetForm();
			}

			if(res.data.msg === 'fail'){
				this.setState({errors: res.data.errors})
			}
		})
		.catch(err => {
			console.error(err.msg);
			Swal.fire(errorAlert);
		})
	}

	render() {
		const { name, email, subject, message, errors } = this.state;
		const subHeadStyle = {
			fontSize: '1.5em',
			fontWeight:'normal',
			paddingBottom: '1em'
		};
		return (
			<ThemeContext.Consumer>
			{
				({ theme }) => (
					<Container>
						<DIV>
							<center>
								<Icon 
									name='envelope' 
									size='massive' 
									color='violet' 
								/>
							</center>
							<br/>
							<Header 
								as='span' 
								size='medium' 
								inverted={theme}
								style={subHeadStyle}
							>
								To get in touch with me. Send me a message using the form below and I will get back to you as soon as possible.
							</Header>
						</DIV>
						<Form 
							inverted={theme}
							as={Container} 
						>
							<Form.Input 
								label={<Header color='violet' inverted={theme}>Name</Header>} 
								value={name} 
								name='name' 
								onChange={this.handleChange} 
								type='text'
								size='small'
								width={16}
								error={errors && errors.name}
							/>
							<Form.Input 
								label={<Header color='violet' inverted={theme}>Email</Header>} 
								value={email} 
								name='email' 
								onChange={this.handleChange} 
								type='text'
								size='small'
								width={16}
								error={errors && errors.email}
							/>
							<Form.Input 
								label={<Header color='violet' inverted={theme}>Subject</Header>} 
								value={subject} 
								name='subject' 
								onChange={this.handleChange} 
								type='text'
								size='small'
								width={16}
								error={errors && errors.subject}
							/>
							<Form.TextArea
								label={<Header color='violet' inverted={theme}>Message</Header>}
								value={message}
								name='message'
								onChange={this.handleChange}
								rows={8}
								width={16}
								error={errors && errors.message}
							/>
							<DIV>
								<Button
									color='violet'
									content='Send Message'
									size='large'
									inverted={!theme}
									onClick={this.sendMessage}
								/>
								<Button
									color='violet'
									inverted={theme}
									size='large'
									floated='right'
									content='Reset'
									onClick={this.resetForm}
								/>
							</DIV>
						</Form>
					</Container>
				)
			}
			</ThemeContext.Consumer>
		)
	}
}

export default Contact;