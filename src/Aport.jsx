import React from "react"
import { Row, Col, Card, Tabs, Icon, Layout, Typography} from 'antd';

const { Paragraph } = Typography;
const { TabPane } = Tabs;
const { Header, Content } = Layout;

const projects=[
	{
		header:"Producer-Consumer-Problem",
		iconType:"box-plot",
		git:"https://github.com/siddg97/Producer-Consumer-Problem",
		descr:"Simulation of a bounded-buffer problem by programming a mutli-thread C program"
	},
	{
		header:"Custom C UNIX Shell",
		iconType:"code",
		git:"https://github.com/siddg97/Producer-Consumer-Problem",
		descr:"A UNIX shell which spawns processes for each command entered. Also includes custom built-in history and help commmands and integration of signal handling."
	},
	{
		header:"Memory Management Interfaces",
		iconType:"cluster",
		git:"https://github.com/siddg97/Memory-management-interfaces-C",
		descr:""
	},
	{
		header:"Custom Linux Kernel",
		iconType:"deployment-unit",
		git:"https://github.com/siddg97/Custom-Linux-Kernel-Patch",
		descr:""
	},
	{
		header:"Expression Evaluator",
		iconType:"interaction",
		git:"https://github.com/siddg97/Simple-Expression-Evaluator-and-Simplifier",
		descr:""
	},
	{},
	{}
];
class APort extends React.Component {
	render(){
		const iStyle={fontSize:20, color:'blue'};
		return(
			<Tabs tabBarGutter={45} tabPosition={'top'} style={{minHeight:"87.8vh"}}>
				<TabPane
				  tab={
					<span>
						Ice-Breaker Problem{"   "}
						<Icon type="radar-chart" style={iStyle}/>
					</span>
				  }
				  key="7"
				>
					<Layout style={{minHeight:"95vh"}}>
					<Header className="hvr-underline-from-right port-header"> A-Star Search Algorithm </Header>
						<Content>
							<div className="flex-container">
								<div className="flex-item ip-img" />
								<div className="flex-item">
									<Typography className="about-content flow-text">
									   	<Paragraph>
											While studying the course CMPT310 (Artificial Intelligence Survey) at Simon Fraser University in the Summer 2019 session, I was given an assignment to implement a subroutine that would generate 5 random graphs using the Erdos-Renyi Algorithm and then create a Constraint Satisfaction Problem (CSP) for each of these graphs and then solve this problem by finding the chromatic number of the graph. This cycle would be repeated 5 times till using 2 different algorithms. First using Backtracking Search with improvements and then with the Min-Conflicts search. I also recorded several important statistics about each instance and compared the algorithms for robustness.
										</Paragraph>
										<Paragraph>
											You can find the source code for this project on <a href="https://github.com/siddg97/aima-python/tree/a2" target="_blank" rel="noopener noreferrer">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
										</Paragraph>
										<br/><br/><br/>
										<center><a href="https://github.com/siddg97/aima-python/tree/a2" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="github" style={{fontSize:80, color:'black'}}/></a></center>
									</Typography>
								</div>
							</div>
						</Content>
					</Layout>
				</TabPane>
				<TabPane
				  tab={
					<span>
						RPN Calculator{"   "}
						<Icon type="calculator" style={iStyle}/>
					</span>
				  }
				  key="8"
				>
					<Layout style={{minHeight:"95vh"}}>
						<Header className="hvr-underline-from-right port-header"> Haskell Postfix Calculator </Header>
						<Content>
							<div className="flex-container">
								<div className="flex-item hc-img" />
								<div className="flex-item">
									<Typography className="about-content flow-text">
									   	<Paragraph>
											While studying the course CMPT383 (Comparative Programming Languages) at Simon Fraser University in the Summer 2019 session, I implemented a calculator in Haskell. I set up a stack ADT in which arguments can be stored and then certain operations can be performed on them. The expressions it can evaluate are similar to the RPN or Postfix expression syntax and supports several operations.
										</Paragraph>
										<Paragraph>
											You can find the source code for this project on <a href="https://github.com/siddg97/RPN-Calculator" target="_blank" rel="noopener noreferrer">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
										</Paragraph><br/><br/><br/>
										<center><a href="https://github.com/siddg97/RPN-Calculator" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="github" style={{fontSize:80, color:'black'}}/></a></center>
									</Typography>
								</div>
							</div>
						</Content>
					</Layout>
				</TabPane>
			</Tabs>
		);
	}
}

export default APort