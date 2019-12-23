import React, { useContext } from 'react';
import {
	Container,
	Item,
	Label,
	Header,
	Icon,
	Button,
	Divider
} from 'semantic-ui-react';

import { ThemeContext } from '../_context/store.js';


const headStyle = {
	fontSize: '2em', 
	marginBottom: '0.5em',
};

const subHeadStyle = {
	fontSize: '1.5em',
    fontWeight:'normal',
    marginBottom:'1.5em'
};

const academicProjects = [
	{
		header:"UNIX Shell",
		git:"https://github.com/siddg97/Producer-Consumer-Problem",
		descr:"A UNIX shell with custom built-in commmands using fok/exec system calls in C. It also supports signal handling for custom signals.",
		imgsrc:'/assets/shell.png',
		tags:["C","shell","UNIX"],
	},
	{
		header:"Kernel Patch",
		git:"https://github.com/siddg97/Custom-Linux-Kernel-Patch",
		descr:"Developed a git patch for the linux kernel v4.20.13. Patch includes two built-in system calls in C. ",
		imgsrc:'/assets/kernel.png',
		tags:["C","linux","kernel"],
	},
	{
		header:"IDA* Npuzzle Solver",
		git:"https://github.com/siddg97/Npuzzle",
		descr:"Programmed a memory efficient version of the A* algorithm to solve a given N-puzzle problem in C++. Program solves puzzles for 2 <= N <= 25 in optimal time.",
		imgsrc:'/assets/ep.png',
		tags:["C++","A*"],
	},
	{
		header:"Memory Interfaces",
		git:"https://github.com/siddg97/Memory-management-interfaces-C",
		descr:"Implemented the free() and malloc() functions in C using pointer arithmetic and linked lists to manage memory. Developed program to use one of First Fit Algorithm, Best Fit Algorithm or Worst Fit Algorithm.",
		imgsrc:'/assets/mm.png',
		tags:["C","malloc","free"],
	},
	{
		header:"TrackIT",
		git:"https://github.com/JackTheWright/CMPT276Group9",
		descr:"An iOS application focused on providing a simple way to track their DASH diet on a meal-to-meal basis. Providing personalized suggestions and analysis of users diet.",
		imgsrc:'/assets/trackit.jpg',
		tags:["swift","SQL","iOS"],
	},
	{
		header:"pMCTS Tic Tac Toe",
		git:"https://github.com/siddg97/tictactoe",
		descr:"Developed a python CLI based game of tic tac toe which never looses against a smart human opponent. Used reinforced learning to help AI make every move. Adjusted number of random playouts before making each move to achieve desired difficulty.",
		imgsrc:'/assets/ttt.png',
		tags:["python","pMCTS"],
	},
	{
		header:"Point and Contextual Anomaly Detection",
		git:"https://github.com/siddg97/cmpt318-term-project",
		descr:"Anomaly detection for household electricity consumption. Used the Rstudio enviornment to detect point anomalies. Also detected contextual anomalies using Hidden Markov Models.",
		imgsrc:'/assets/detection.png',
		tags:["R","HMM","depmixS4"]
	}
];


const personalProjects = [
		{
			header:"colorP",	
			git:"https://github.com/siddg97/colorP",
			metaLink:"https://pypi.org/project/colorp/",
			descr:"A package that uses ANSI-compaitanle codes and provideds methods to beautifully format and style text which can be printed on consoles",
			imgsrc:'/assets/cp.png',
			tags:["python","pip","ANSI"]
		},
		{
			header:"bugDB",	
			git:"https://github.com/siddg97/BugDB",
			metaLink:"",
			descr:"A full stack web app for effortless bug tracking and squashing. MAde using the MERN technology stack.",
			imgsrc:'/assets/bug.png',
			tags:["MERN","REST"]
		},
		{
			header:"Portfolio Website",	
			git:"https://github.com/siddg97/portfolio",
			metaLink:"http://www.siddg.info",
			descr:"A single page react app with minimalistic design for a neat and immersive personal portfolio website. Deployed on Heroku.",
			imgsrc:'/assets/pw.png',
			tags:["reactJS","heroku","HTML","CSS"]
		},
		// {
		// 	header:"ProfRank",
		// 	git:'',
		// 	metaLink:'',
		// 	descr:'',
		// 	imgsrc:'',
		// 	tags:[]
		// }
];

const experience = [
	{
		company: 'BlackBerry Limited',
		position: 'Acoustics Software Deveopment Intern',
		when:'January 2020 - Present',
		description: 'Embedded software for acoustic systems. Signals processing etc.',
		icon: 'blackberry',
		link: 'https://www.blackberry.com/us/en?utm_expid=.QRcSSsjeQnCk6irrlAZueg.0&utm_referrer=https%3A%2F%2Fwww.blackberry.com%2Fus%2Fen'
	}
];


const Exp = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Item.Group divided>
		{
			experience.map((item,i) => 
				<Item key={i}>
					<Icon name={item.icon} color='blue' size='massive' />
					<Item.Content style={{border:0, borderRadius:0}}>
						<Item.Header>
							<Header 
								color='teal'
								size='large' 
								inverted={theme} 
							>
								{item.position} - {item.company}
							</Header>
							<Header 
								size='tiny'
								inverted={theme}
								color='orange' 
								style={subHeadStyle} 
								content={item.when} 
							/>
						</Item.Header>
						<Item.Description>
							<Header 
								inverted={theme} 
								size='small' 
								style={subHeadStyle}
							>
								{item.description}
							</Header>
							<Button 
								circular
								color='blue' 
								size='medium' 
								icon='external alternate' 
								inverted={theme} content='BlackBerry' 
								href={item.link} 
							/>
						</Item.Description>
					</Item.Content>
				</Item>
			)
		}
		</Item.Group>
	)
}

const Pport = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Item.Group divided>
		{
			personalProjects.map((item,i) =>
				<Item key={i}>
					<Item.Content style={{border:0, borderRadius:0}}>
						<Item.Header>
							<Header inverted={theme} size='large' color='orange' style={headStyle}>
								{item.header}
							</Header>
						</Item.Header>
						<Item.Description>
							<Header inverted={theme} size='medium' style={subHeadStyle}>
								{item.descr}
							</Header>
						</Item.Description>
						<Item.Extra>
							<Button circular color='olive' size='tiny' icon='github' inverted={theme} content='Github' href={item.git} />
							<Button circular color='red' size='tiny' icon='info' inverted={theme} content='More' href={item.metaLink} />
							<Label.Group color='blue'>
							{
								item.tags.map((tag,i) => 
									<Label key={i}>{tag}</Label>
								)
							}
							</Label.Group>
						</Item.Extra>
					</Item.Content>
				</Item>
			)
		}
		</Item.Group>
	)
}
	

const Aport = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Item.Group divided>
		{
			academicProjects.map((item,i) => (
				<Item key={i}>
					<Item.Content style={{border:0, borderRadius:0}}>
						<Item.Header>
							<Header inverted={theme} size='large' color='orange' style={headStyle}>
								{item.header}
							</Header>
						</Item.Header>
						<Item.Description>
							<Header inverted={theme} size='medium' style={subHeadStyle}>
								{item.descr}
							</Header>
						</Item.Description>
						<Item.Extra>
							<Button circular color='olive' inverted={theme} size='tiny' icon='github' content='Github' href={item.git} />
							<Label.Group color='blue'>
							{
								item.tags.map((tag,i) => 
									<Label key={i}>{tag}</Label>
								)
							}
							</Label.Group>
						</Item.Extra>
					</Item.Content>
				</Item>
			)		)
		}
		</Item.Group>
	)
}

const Portfolio = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Container>
			<Header 
				color='olive' 
				inverted={theme}
				content='Experience' 
				style={headStyle} 
			/>
			<Exp />
			<Divider />
			<Header 
				color='olive' 
				inverted={theme}
				content='Personal Projects' 
				style={headStyle} 
			/>
			<Pport />
			<Divider />
			<Header 
				color='olive' 
				inverted={theme}
				content='Academic Projects' 
				style={headStyle} 
			/>
			<Aport />
		</Container>
	)
}

export default Portfolio;