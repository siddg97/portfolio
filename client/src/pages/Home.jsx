import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';

const content = [
	{
		header:
			<span>I'm Siddharth Gupta</span>
			,
		subheader:
			<span>
				I am a <Header as='a' size='small' inverted color='red' href='https://en.wikipedia.org/wiki/Software_engineer'>Software Engineer</Header> rooted in the Greater Vancouver Area. 
			</span>
	},
	{
		header:
			<span>
				I am interested in
			</span>
		,
		subheader:
			<span>
				<Header as='a' size='small' inverted color='red' href='https://en.wikipedia.org/wiki/Embedded_software'>Embedded Development</Header>, 
				{' '}<Header as='a' size='small' inverted color='red' href='https://en.wikipedia.org/wiki/Web_development'>Web Development</Header>, 
				{' '}<Header as='a' size='small' inverted color='red' href='https://en.wikipedia.org/wiki/Artificial_intelligence'>Artificial Intelligence</Header> 
				{' '}and{' '} <Header as='a' size='small' inverted color='red' href='https://en.wikipedia.org/wiki/Machine_learning'>Machine Learning</Header>.
			</span>
	},
	{
		header:
			<span>
				Expected graduation <Header as='span' inverted color='red'>June 2021</Header>
			</span>
		,
		subheader:
			<span>
				I am an international undergraduate student. Majoring in <Header as='a' inverted color='red' size='small' href='http://www.sfu.ca/computing.html'>Bsc. Comuting Science</Header> at
				{' '}<Header as='a' inverted color='red' size='small' href='https://www.sfu.ca/'>Simon Fraser University, Canada</Header>.
			</span>
	},
	{
		header:
			<span>
				I currently live in <Header as='a' inverted href='https://en.wikipedia.org/wiki/Burnaby' color='red'>Burnaby</Header>
			</span>
		,
		subheader:
			<span>
				Originally from <Header as='a' inverted color='red' href='https://en.wikipedia.org/wiki/India'> India</Header>.
			</span>
	},
];


const Home = ({ mobile }) => {
	const headStyle={
		fontSize: '2em', 
		marginBottom: 0,
	};
	const subHeadStyle={
		fontSize: '1.5em',
	    fontWeight:'normal',
	    marginBottom:'1.75em'
	
	};
	return (
		<Container style={{paddingTop:'1.5em'}}>
		{
			content.map((item,i) =>
				<div key={i}>
					<Header
						color='blue'
						style={headStyle}
						inverted
					>
						{item.header}
					</Header>
					<Header
						style={subHeadStyle}
						inverted
					>
						{item.subheader}
					</Header>
				</div>
			)
		}
		</Container>
	)
}

Home.propTypes = {
  mobile: PropTypes.bool,
}

export default Home;