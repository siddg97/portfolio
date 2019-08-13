import React from "react"
import { Row, Col, Card, Icon, Typography} from 'antd';
import pcp from './Images/pcp.png';
import shell from './Images/shell.png';
import mm from './Images/mm.jpg';
import kernel from './Images/kernel.png';
import ee from './Images/ee.png';
import ep from './Images/ep.png';
import hc from './Images/hc.png';

const { Paragraph } = Typography;

const projects=[
	
	{
		header:"RPN Calculator",
		iconType:"calculator",
		git:"https://github.com/siddg97/RPN-Calculator",
		descr:"A Reverse-Polish Notation (postfix) expression calculator in Haskell.",
		imgsrc:hc
	},
	{
		header:"Custom C UNIX Shell",
		iconType:"code",
		git:"https://github.com/siddg97/Producer-Consumer-Problem",
		descr:"A UNIX shell in C with custom built-in commmands and signal handling.",
		imgsrc:shell
	},
	{
		header:"Custom Linux Kernel",
		iconType:"deployment-unit",
		git:"https://github.com/siddg97/Custom-Linux-Kernel-Patch",
		descr:"Developed a git patch for the linux kernel v4.20.13. Patch includes 2 built-in system calls.",
		imgsrc:kernel
	},
	{
		header:"Expression Evaluator",
		iconType:"interaction",
		git:"https://github.com/siddg97/Simple-Expression-Evaluator-and-Simplifier",
		descr:"Developed a Scheme program to evaluate binary infix expression based on the Go ENBF language.",
		imgsrc:ee
	},
	{
		header:"Memory Management Interfaces",
		iconType:"cluster",
		git:"https://github.com/siddg97/Memory-management-interfaces-C",
		descr:"Implemented the free() and malloc() functions in C using pointer arithmetic and linked lists to manage memory.",
		imgsrc:mm
	},
	{
		header:"IDA* Npuzzle Solver",
		iconType:"table",
		git:"https://github.com/siddg97/Npuzzle",
		descr:"Programmed a C++ program for a memory efficient version of the A* algorithm to solve a given N-puzzle problem.",
		imgsrc:ep
	},
	{
		header:"Producer-Consumer-Problem",
		iconType:"box-plot",
		git:"https://github.com/siddg97/Producer-Consumer-Problem",
		descr:"Simulation of a bounded-buffer problem by programming a mutli-thread C program synchonized using locks and seamaphores.",
		imgsrc:pcp
	},
];

class APort extends React.Component {
	render(){
		const iStyle={fontSize:40, color:'black'};
		return(
			<Row type="flex" justify="center" gutter={36}>
				{
				projects.map((item,i) => 
					<Col xs={20} sm={18} md={7} key={i}>
						<Card hoverable title={item.header} style={{width:'auto',height:'650px'}} cover={<img alt="" className="card-img" src={item.imgsrc}/>}>
							<Paragraph> {item.descr} </Paragraph><br/><br/>
							<center>
								<a href={item.git} target="_blank" rel="noopener noreferrer" style={iStyle} className="hvr-pulse"><Icon type="github"/> </a>
							</center>
						</Card>
					</Col>
					)
				}
				
			</Row>	
		);
	}
}

export default APort