import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Button, Icon } from 'semantic-ui-react';


const Home = ({ mobile }) => {
	const headStyle={
		fontSize: '3em', 
		marginBottom: 0,
	};
	const subHeadStyle={
		fontSize: '1.5em',
	    fontWeight:'normal',
	    marginBottom:'1.25em'
	};

	return (
		<Container style={{paddingBottom:'2em'}}>
			<Header 
				size='huge' 
				color='yellow'
				style={headStyle}
			> 
				Hello World!
			</Header>
			<Header 
				size='huge' 
				inverted
				style={headStyle}
			> 
				I'm Siddharth Gupta 
			</Header>
			<Header	inverted style={subHeadStyle}>
				I'm a {'  '}<Header as='a' size='small' inverted color='yellow' href='https://en.wikipedia.org/wiki/Software_engineer'>Software Engineer</Header> rooted in the Greater Vancouver Area. 
				My interests include {'  '}<Header as='a' size='small' inverted color='blue' href='https://en.wikipedia.org/wiki/Web_development'>Web Development</Header>, 
				{'  '}<Header as='a' size='small' inverted color='blue' href='https://en.wikipedia.org/wiki/Embedded_software'>Embedded Development</Header>, 
				{'  '}<Header as='a' size='small' inverted color='blue' href='https://en.wikipedia.org/wiki/Machine_learning'>Machine Learning</Header> and 
				{'  '}<Header as='a' size='small' inverted color='blue' href='https://en.wikipedia.org/wiki/Machine_learning'>Cyber Security</Header>. 
				I'm currently an international student at {'  '}<Header as='a' inverted color='red' size='small' href='https://www.sfu.ca/'>Simon Fraser University</Header>, Canada. 
				I'm majoring in {'  '}<Header as='a' inverted color='red' size='small' href='http://www.sfu.ca/computing.html'>Computing Science</Header> and expecting to graduate by 
				{'  '}<Header as='span' inverted color='red'>June 2021</Header>.
			</Header>
			<Header
				size='huge'
				inverted
				style={subHeadStyle}
			>
				I'm currently on an 8-month co-op at <Header as='a' size='small' color='grey' href='https://www.blackberry.com/us/en?utm_expid=.QRcSSsjeQnCk6irrlAZueg.0&utm_referrer=https%3A%2F%2Fwww.google.com%2F'>BlackBerry<Icon name='blackberry'/></Header>
			</Header>
			<Button circular floated='right' size='huge' href='https://en.wikipedia.org/wiki/Burnaby' color='green' icon='map marker alternate' content='Burnaby' />
			<Button circular floated='left' size='huge' href='https://drive.google.com/file/d/1v808eT9XgOxtgzL02rM_HVu0gVOrxpQy/view?usp=sharing' color='red' icon='download' content='Resume' />
		</Container>
	)
}

Home.propTypes = {
  mobile: PropTypes.bool,
}

export default Home;