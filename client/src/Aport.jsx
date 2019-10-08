import React from "react"
import { Row, Col, Card, Icon, Tag } from 'antd';
import ToggleEllipsis from './ToggleEllipsis.jsx';

const projects=[

	{
		header:"RPN Calculator",
		iconType:"calculator",
		git:"https://github.com/siddg97/RPN-Calculator",
		descr:"A Reverse-Polish Notation (postfix) expression calculator in Haskell using stacks.",
		imgsrc:'http://localhost:5000/assets/hc.png',
		tags:["haskell","RPN"],
	},
	{
		header:"UNIX Shell",
		iconType:"code",
		git:"https://github.com/siddg97/Producer-Consumer-Problem",
		descr:"A UNIX shell in C with custom built-in commmands and signal handling.",
		imgsrc:'http://localhost:5000/assets/shell.png',
		tags:["C","shell","UNIX"],
	},
	{
		header:"Kernel Patch",
		iconType:"deployment-unit",
		git:"https://github.com/siddg97/Custom-Linux-Kernel-Patch",
		descr:"Developed a git patch for the linux kernel v4.20.13. Patch includes 2 built-in system calls in C.",
		imgsrc:'http://localhost:5000/assets/kernel.png',
		tags:["C","linux","kernel"],
	},
	{
		header:"IDA* Npuzzle Solver",
		iconType:"table",
		git:"https://github.com/siddg97/Npuzzle",
		descr:"Programmed a memory efficient version of the A* algorithm to solve a given N-puzzle problem in C++.",
		imgsrc:'http://localhost:5000/assets/ep.png',
		tags:["C++","A*"],
	},
	{
		header:"Expression Evaluator",
		iconType:"interaction",
		git:"https://github.com/siddg97/Simple-Expression-Evaluator-and-Simplifier",
		descr:"Developed a Scheme program to evaluate and simplify binary infix expressions in the Go ENBF language.",
		imgsrc:'http://localhost:5000/assets/ee.png',
		tags:["scheme","ENBF"],
	},
	{
		header:"Memory Interfaces",
		iconType:"cluster",
		git:"https://github.com/siddg97/Memory-management-interfaces-C",
		descr:"Implemented the free() and malloc() functions in C using pointer arithmetic and linked lists to manage memory.",
		imgsrc:'http://localhost:5000/assets/mm.png',
		tags:["C","malloc","free"],
	},
	{
		header:"Bounded-buffer Problem",
		iconType:"box-plot",
		git:"https://github.com/siddg97/Producer-Consumer-Problem",
		descr:"A mutlithreaded C program synchonized using locks and seamaphores to simluate a Bounded-buffer problem",
		imgsrc:'http://localhost:5000/assets/pcp.svg',
		tags:["C","POSIXt","fork/exec"],
	},
	{
		header:"TrackIT",
		iconType:"pie-chart",
		git:"https://github.com/JackTheWright/CMPT276Group9",
		descr:"An iOS application focused on providing a simple way to track their DASH diet on a meal-to-meal basis and giving suggestions.",
		imgsrc:'http://localhost:5000/assets/trackit.jpg',
		tags:["swift","SQL","iOS"],
	},
	{
		header:"pMCTS Tic Tac Toe",
		iconType:"number",
		git:"https://github.com/siddg97/tictactoe",
		descr:"Developed a python CLI based game of tic tac toe which never looses against a smart human opponent.",
		imgsrc:'http://localhost:5000/assets/ttt.png',
		tags:["python","pMCTS"],
	},

];

class APort extends React.Component {
	render(){
		const picStyle={fontSize:40, color:'black'};
		const cardHeadStyle = {textAlign:'center',backgroundColor:'#fff'}
		const projStyle = {marginBottom:24}
		return(
			<div>
				<Row type="flex" justify="center" gutter={24}>
				{
				projects.map((item,i) =>
					<Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6} key={i}>
						<Card hoverable title={<span> <Icon type={item.iconType}/>{" "+item.header}</span>} headStyle={cardHeadStyle} style={projStyle} cover={<div style={{padding:3}}><img alt="" className="card-img" src={item.imgsrc}/></div>}>
							<center>
								<ToggleEllipsis text={item.descr} rows={2}/>
								<a href={item.git} target="_blank" rel="noopener noreferrer" style={picStyle} className="hvr-pop"><Icon type="github"/> </a>
								<br/>
								{
									item.tags.map((elem,i) =>
										<Tag color="geekblue" key={i}>{elem}</Tag>
									)
								}
							</center>
						</Card>
					</Col>
					)
				}
				</Row>
			</div>
		);
	}
}

export default APort
