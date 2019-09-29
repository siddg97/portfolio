import React from "react"
import { Row, Col, Card, Icon, Tag, Typography} from 'antd';
import pcp from './Images/pcp.svg';
import shell from './Images/shell.png';
import mm from './Images/mm.png';
import kernel from './Images/kernel.png';
import ee from './Images/ee.png';
import ep from './Images/ep.png';
import hc from './Images/hc.png';
import trackit from './Images/trackit.jpg';
import ttt from './Images/ttt.png';

const { Paragraph } = Typography;

const projects=[
	
	{
		header:"RPN Calculator",
		iconType:"calculator",
		git:"https://github.com/siddg97/RPN-Calculator",
		descr:"A Reverse-Polish Notation (postfix) expression calculator in Haskell using stacks.",
		imgsrc:hc,
		tags:["haskell","RPN","stacks"],
	},
	{
		header:"UNIX Shell",
		iconType:"code",
		git:"https://github.com/siddg97/Producer-Consumer-Problem",
		descr:"A UNIX shell in C with custom built-in commmands and signal handling.",
		imgsrc:shell,
		tags:["C","shell","UNIX"],
	},
	{
		header:"Kernel Patch",
		iconType:"deployment-unit",
		git:"https://github.com/siddg97/Custom-Linux-Kernel-Patch",
		descr:"Developed a git patch for the linux kernel v4.20.13. Patch includes 2 built-in system calls in C.",
		imgsrc:kernel,
		tags:["C","linux","kernel"],
	},
	{
		header:"IDA* Npuzzle Solver",
		iconType:"table",
		git:"https://github.com/siddg97/Npuzzle",
		descr:"Programmed a memory efficient version of the A* algorithm to solve a given N-puzzle problem in C++.",
		imgsrc:ep,
		tags:["C++","A-star search","Sliding-puzzle"],
	},
	{
		header:"Expression Evaluator",
		iconType:"interaction",
		git:"https://github.com/siddg97/Simple-Expression-Evaluator-and-Simplifier",
		descr:"Developed a Scheme program to evaluate and simplify binary infix expressions in the Go ENBF language.",
		imgsrc:ee,
		tags:["scheme","mit-scheme","ENBF"],
	},
	{
		header:"Memory Interfaces",
		iconType:"cluster",
		git:"https://github.com/siddg97/Memory-management-interfaces-C",
		descr:"Implemented the free() and malloc() functions in C using pointer arithmetic and linked lists to manage memory.",
		imgsrc:mm,
		tags:["C","memory management","malloc/free"],
	},
	{
		header:"Bounded-buffer Problem",
		iconType:"box-plot",
		git:"https://github.com/siddg97/Producer-Consumer-Problem",
		descr:"A mutlithreaded C program synchonized using locks and seamaphores to simluate a Bounded-buffer problem",
		imgsrc:pcp,
		tags:["C","multithreading","fork/exec"],
	},
	{
		header:"TrackIT",
		iconType:"pie-chart",
		git:"https://github.com/JackTheWright/CMPT276Group9",
		descr:"An iOS application focused on providing a simple way to track their DASH diet on a meal-to-meal basis and giving suggestions.",
		imgsrc:trackit,
		tags:["Swift","SQL","iOS"],
	},
	{
		header:"pMCTS Tic Tac Toe",
		iconType:"number",
		git:"https://github.com/siddg97/tictactoe",
		descr:"Developed a python CLI based game of tic tac toe which never looses against a smart human opponent.",
		imgsrc:ttt,
		tags:["python3","Pure Monte-Carlo"],
	},
	
];

class APort extends React.Component {
	render(){
		const iStyle={fontSize:40, color:'black'};
		return(
			<div>
				<Row type="flex" gutter={24}>
				{
				projects.map((item,i) => 
					<Col xs={24} sm={24} md={12} lg={6} key={i}>
						<Card hoverable title={<center><span> <Icon type={item.iconType}/>{" "+item.header}</span></center>} style={{'marginBottom':15}} cover={<div style={{'padding':1}}><img alt="" className="card-img" src={item.imgsrc}/></div>}>
							<center>
								<Paragraph ellipsis={{ rows: 2, expandable: true }}> {item.descr} </Paragraph>
								<a href={item.git} target="_blank" rel="noopener noreferrer" style={iStyle} className="hvr-pop"><Icon type="github"/> </a>
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