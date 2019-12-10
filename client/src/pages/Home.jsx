import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

const story = [
	{
		text:"My name is",
		link:"http://siddg.info/",
		header:"Siddharth Gupta",
		color:"#ec6b2d"
	},
	{
		text:"I'm currently an",
		link:"https://www.vocabulary.com/dictionary/undergraduate",
		header:"Undergraduate student",
		color:"#0d0f05"
	},
	{
		text:"Expected to graduate",
		link:"https://www.calendar-365.com/calendar/2020/June.html",
		header:"June 2020",
		color:"#0d0f05"
	},
	{
		text:"I am attending",
		link:"https://www.sfu.ca/",
		header:"Simon Fraser University",
		color:"#1890ff"
	},
	{
		text:"Pursuing my bachelors in",
		link:"http://www.sfu.ca/computing.html",
		header:"Computing Science",
		color:"#1890ff"
	},
	{
		text:"I am from",
		link:"https://en.wikipedia.org/wiki/India",
		header:"India",
		color:"#52c41a"
	},
	{
		text:"Currently living in",
		link:"https://en.wikipedia.org/wiki/Burnaby",
		header:"Burnaby",
		color:"#52c41a"
	},
	{
		text:"I am a",
		link:"https://en.wikipedia.org/wiki/Software_engineer",
		header:"Software Developer",
		color:"red"
	},
	{
		text:"Here is my",
		link:"https://drive.google.com/file/d/1v808eT9XgOxtgzL02rM_HVu0gVOrxpQy/view?usp=sharing",
		header:"Resume",
		color:"red"
	},
];

function Home(){
	const pageStyle={minHeight:'85vh', width:'100%'};
	return (
		<Grid verticalAlign='middle' columns={4} centered style={pageStyle} padded>
			<Grid.Row color='black'>
				<Grid.Column  textAlign='center' color='red'>
					<h2> I am Siddharth Gupta </h2>
				</Grid.Column>
				<Grid.Column  textAlign='center' color='green'>
					<h2> Majoring in CS at SFU </h2>
					<h2> I am from India, living in Burnaby</h2>
				</Grid.Column>
				<Grid.Column textAlign='center' color='blue'>
					<h2> Download Resume</h2>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}

export default Home;