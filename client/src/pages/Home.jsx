import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Container, Header } from 'semantic-ui-react';

const content = [
	{
		header:
			<span>
				Hi, I am <Header as='span' color='yellow'>Siddharth Gupta</Header>
			</span>,
		subheader:
			<span>
				I am a <Header as='a' size='small' inverted color='blue' href='https://en.wikipedia.org/wiki/Software_engineer'>Software Engineer</Header> rooted in the Greater Vancouver Area. 
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
				<Header as='a' size='small' inverted color='violet' href='https://en.wikipedia.org/wiki/Embedded_software'>Embedded Development</Header>, 
				{' '}<Header as='a' size='small' inverted color='red' href='https://en.wikipedia.org/wiki/Web_development'>Web Development</Header>, 
				{' '}<Header as='a' size='small' inverted color='blue' href='https://en.wikipedia.org/wiki/Artificial_intelligence'>Artificial Intelligence</Header> 
				{' '}and{' '} <Header as='a' size='small' inverted color='olive' href='https://en.wikipedia.org/wiki/Machine_learning'>Machine Learning</Header>.
			</span>
	},
	{
		header:
			<span>
				Expected to graduate by <Header as='span' color='red'>June 2021</Header>
			</span>
		,
		subheader:
			<span>
				I am an international undergraduate student. Majoring in <Header as='a' color='teal' size='small' href='http://www.sfu.ca/computing.html'>Bsc. Comuting Science</Header> at
				{' '}<Header as='a' color='red' size='small' href='https://www.sfu.ca/'>Simon Fraser University, Canada</Header>.
			</span>
	},
	{
		header:
			<span>
				Currently live in <Header as='a' href='https://en.wikipedia.org/wiki/Burnaby' color='green'>Burnaby</Header>
			</span>
		,
		subheader:
			<span>
				Originally from <Header as='a' color='yellow' href='https://en.wikipedia.org/wiki/India'> India</Header>.
			</span>
	},
];


const Home = ({ mobile }) => {
	const pageStyle={minHeight:'90vh', width:'100vw', border:0, borderRadius:0, margin:0};
	const headStyle={
		fontSize: mobile ? '2em' : '4em', 
		marginBottom: 0, 
		marginTop: mobile ? '1.5em' : '3em'
	};
	const subHeadStyle={
		fontSize: mobile ? '1.5em':'1.7em',
	    fontWeight:'normal',
	    marginTop: mobile ? '0.5em':'1.5em'
	};
	return (
		<Segment 
			inverted 
			style={pageStyle}
		>
			<Container>
			{
				content.map((item,i) =>
					<div key={i}>
						<Header
							as='h1'
							style={headStyle}
							inverted
						>
							{item.header}
						</Header>
						<Header
							as='h2'
							style={subHeadStyle}
							inverted
						>
							{item.subheader}
						</Header>
					</div>
				)
			}
			</Container>
		</Segment>
	)
}

Home.propTypes = {
  mobile: PropTypes.bool,
}

export default Home;