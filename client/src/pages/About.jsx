import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Grid, Divider, Container, Header, Image } from 'semantic-ui-react';

import { ThemeContext } from '../_context/store.js';


const About = () => {
	const { theme } = useContext(ThemeContext);
	const headStyle={
		fontSize: '2em',
		marginBottom: 0,
	};
	const subHeadStyle={
		fontSize: '1.5em',
		fontWeight:'normal',
		paddingBottom: '1.75em'
	};
	return (
		<Grid 
			columns={2} 
			inverted={theme} 
			stretched 
			stackable 
			container  
			relaxed
			verticalAlign='middle'
		>
			<Grid.Row 
				stretched 
				centered
			>
				<Grid.Column width={10}>
					<Container>
						<Header 
							color='blue' 
							inverted={theme}  
							style={headStyle}
						>
							About Me
						</Header>
						<Header 
							inverted={theme} 
							style={subHeadStyle}
						>
							I am currently an undergarduate student majoring in Computing Science. My relevant experiences include managing and developing software in individual 
							and team enviornments. My passion is fueled by my understanding of technologies in the field of computing science and fascination of how two bits 0 and 1 
							have transformed technolgy and software today. 
							<br/><br/>
							I consider myself a <Header as='span' inverted={theme} size='small' color='green'>forever student</Header>. I am eager to build on my
							academic foundations and stay in tune with the latest software technologies and strategies through continuous learning.	My hunger for knowledge and determination 
							to produce actionable information has contributed greatly in my university career. 
							<br/><br/>
							I believe in mindfulness is the key to success - a tenet I live throughout my interests in programming, problem-solving, and even while palying video games. 
							I have worked on a number of academic projects and am currently working on a few personal projects but I am always interested in a challenge!
						</Header>
					</Container>
				</Grid.Column>
				<Grid.Column width={6}>
					<center>
						<Image 
				            src='http://gsidd97.herokuapp.com/assets/me.jpg' 
				            size='medium' 
				            avatar
			            />
			        </center>
				</Grid.Column>
			</Grid.Row>
			<Divider/>
			<Grid.Row 
				stretched 
				centered
			>
				<Grid.Column width={10}>
					<Container>
						<Header 
							color='blue' 
							size='huge' 
							inverted={theme} 
							floating='left' 
							style={headStyle}
						>
							Education
						</Header>
						<Header 
							inverted={theme} 
							style={subHeadStyle}
						>
							I began my undergarduate carrer by traveling halfway around the globe from Delhi, India to Vancouver, Canada to study at <Header as='span' inverted={theme} size='small' color='green'> Simon Fraser University,
							Burnaby</Header>. After my first year of studies I had a grip on a handful of programming languages and some software techniques and tools. Throughout the subsequent
							years my grip has become stronger and stronger. 
							<br/><br/>
							I consider myself really happy to have chosen this field of studies and have started developed a passion for CS. I am currently in my last year of studies before grafuating with my Bachelors 
							in Computing Science. My expected graduation date is mid <Header as='span' inverted={theme} size='small' color='green'>June 2021</Header>. Throughout my current university experience at SFU I have developed 
							several technical and soft skills. I have met a great deal of bright and geniuine people at SFU who also play an important role in my education.
						</Header>
					</Container>
				</Grid.Column>
				<Grid.Column width={6}>
					<center>
						<Image
							src='http://gsidd97.herokuapp.com/assets/SFU.png'
							size='large'
						/>
					</center>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}

About.propTypes = {
	mobile: PropTypes.bool,
}
export default About;