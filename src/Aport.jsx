import React from "react"
import { Tabs, Icon, Layout, Typography} from 'antd';

const { Paragraph } = Typography;
const { TabPane } = Tabs;
const { Header, Content } = Layout
class APort extends React.Component {
	render(){
		const iStyle={fontSize:20, color:'blue'};
		return(
			<Tabs tabBarGutter={45} tabPosition={'top'} style={{minHeight:"87.8vh"}}>
				<TabPane
				  tab={
					<span>
						Bounded - Buffer Problem{"   "}
						<Icon type="box-plot" style={iStyle} />
					</span>
				  }
				  key="1"
				>
					<Layout style={{minHeight:"95vh"}}>
						<Header className="hvr-underline-from-right port-header"> Producer-Consumer Problem </Header>
						<Content>
							<div className="flex-container">
								<div className="flex-item pcp-img" />
								<div className="flex-item">
									<Typography className="about-content">
									   	<Paragraph>
											While studying the course CMPT300 (Operating Systems I) at Simon Fraser University in the Spring 2019 session, I made a mutli-threaded C program called candykids. candykids simulated the producer-consumer problem in which children ate candies from a bounded-buffer and factories produced candies in the same bounded-buffer. The aim of the simulation was to avoid any type of race conditions and prevent a deadlock from occuring. I used the POSIX Threads library to be able to satisfy the synchronization of the use of the common bounded buffer between factories and children using pthread mutex locks and semaphores.
										</Paragraph>
										<Paragraph>
											You can find the source code for this project on <a href="https://github.com/siddg97/Producer-Consumer-Problem" target="_blank" rel="noopener noreferrer">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
										</Paragraph><br/><br/><br/>
										<center><a href="https://github.com/siddg97/Producer-Consumer-Problem" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="github" style={{fontSize:80, color:'black'}}/></a></center>
									</Typography>
								</div>
							</div>
						</Content>
					</Layout>
				</TabPane>
				<TabPane
				  tab={
					<span>
						Bash Shell Script{"   "}
						<Icon type="code" style={iStyle}/>
					</span>
				  }
				  key="2"
				>
					<Layout style={{minHeight:"95vh"}}>
						<Header className="hvr-underline-from-right port-header"> Linux Command C-Shell </Header>
						<Content>
							<div className="flex-container">
								<div className="flex-item shell-img" />
								<div className="flex-item">
									<Typography className="about-content flow-text">
									   	<Paragraph>
											While studying the course CMPT300 (Operating Systems I) at Simon Fraser University in the Spring 2019 session, I made my very first C-script shell for the UNIX Bash Terminal. This shell is able to perform 7 different built-in commands using the fork() and the execvp() functions provided in C. This shell also has a custom signal handling function for when the SIGINT (Ctrl + C) signal is detected. The shell is also able to perform commands in the background as well. I also performed unit tests on every built-in command the shell supports and also used valgrind to test for memory leaks. 	
										</Paragraph>
										<Paragraph>
											You can find the source code for this project on <a href="https://github.com/siddg97/LinuxCustomShell-C" target="_blank" rel="noopener noreferrer">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
										</Paragraph><br/><br/><br/>
										<center><a href="https://github.com/siddg97/LinuxCustomShell-C" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="github" style={{fontSize:80, color:'black'}}/></a></center>
									</Typography>
								</div>
							</div>
						</Content>
					</Layout>
				</TabPane>
				<TabPane
				  tab={
					<span>
						Custom Linux Kernel{"   "}
						<Icon type="deployment-unit" style={iStyle}/>
					</span>
				  }
				  key="3"
				>
					<Layout style={{minHeight:"95vh"}}>
						<Header className="hvr-underline-from-right port-header"> Custom Linux Kernel Patch </Header>
						<Content>
							<div className="flex-container">
								<div className="flex-item kernel-img" />
								<div className="flex-item">
									<Typography className="about-content flow-text">
									   	<Paragraph>
											While studying the course CMPT300 (Operating Systems I) at Simon Fraser University in the Spring 2019 session, I made my very first custom Linux Kernel Patch. I cloned the entire linux kernel (v4.20.13) from Linus Trovalds original git repository and implemented 2 of my own system calls. The first system call would sum up a given an array of integers. The second system call I implemented showed all the information of a processes ancestors processes and isplayed helpful stats. The stats dont include data about zombie processes that might be running. I also tested these system calls on a virtual QEMU machine with a command line version of linux and used valgrind to check for memory leaks. This was (at that time) by far the most intriguing project I had ever done!
										</Paragraph>
										<Paragraph>
											You can find the source code for this project on <a href="https://github.com/siddg97/Custom-Linux-Kernel-Patch" target="_blank" rel="noopener noreferrer">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
										</Paragraph><br/><br/><br/>
										<center><a href="https://github.com/siddg97/Custom-Linux-Kernel-Patch" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="github" style={{fontSize:80, color:'black'}}/></a></center>
									</Typography>
								</div>
							</div>
						</Content>
					</Layout>
				</TabPane>
				<TabPane
				  tab={
					<span>
					Memory Management {"   "}
					<Icon type="cluster" style={iStyle}/>
					</span>
				  }
				  key="4"
				>
					<Layout style={{minHeight:"95vh"}}>
						<Header className="hvr-underline-from-right port-header"> Dynamic Memory Interfaces </Header>
						<Content>
							<div className="flex-container">
								<div className="flex-item mm-img" />
								<div className="flex-item">
									<Typography className="about-content flow-text">
									   	<Paragraph>
											While studying the course CMPT300 (Operating Systems I) at Simon Fraser University in the Spring 2019 session, I implemented my own version of the free() and malloc() functions available in the C language to manage virtual memory. The implementation of these interfaces can work with three allocation algorithms, namely FIRST-FIT, WORST-FIT and BEST-FIT. The deallocation interface also supports compaction and actively looks for possible reallocation of stored memory to eliminate holes in contigious memory. There are also interfaces to access certain helpful statistics about the chunk of memory being used for allocation and deallocation.
										</Paragraph>
										<Paragraph>
											You can find the source code for this project on <a href="https://github.com/siddg97/Memory-management-interfaces-C" target="_blank" rel="noopener noreferrer">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
										</Paragraph><br/><br/><br/>
										<center><a href="https://github.com/siddg97/Memory-management-interfaces-C" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="github" style={{fontSize:80, color:'black'}}/></a></center>
									</Typography>
								</div>
							</div>
						</Content>
					</Layout>
				</TabPane>
				<TabPane
				  tab={
					<span>
						Expression Evaluator{"   "}
						<Icon type="interaction" style={iStyle}/>
					</span>
				  }
				  key="5"
				>
					<Layout style={{minHeight:"95vh"}}>
						<Header className="hvr-underline-from-right port-header"> Scheme Expression Evaluator </Header>
						<Content>
							<div className="flex-container">
								<div className="flex-item ee-img" />
								<div className="flex-item">
									<Typography className="about-content flow-text">
									   	<Paragraph>
											While studying the course CMPT383 (Comparative Programming Languages) at Simon Fraser University in the Summer 2019 session, I implemented an expression evaluator and simplifier in scheme. I set up 2 enviornments in which variables can be stored and their value as well. Each of these enviornments are compatible with the expression evaluator and simplifier. The expression it can evaluate are similar to the Go expression syntax and the simplification rules are also similar to the Go language. I also modularized the code to simplify refactoring and improve readability.
										</Paragraph>
										<Paragraph>
											You can find the source code for this project on <a href="https://github.com/siddg97/Simple-Expression-Evaluator-and-Simplifier" target="_blank" rel="noopener noreferrer">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
										</Paragraph><br/><br/><br/>
										<center><a href="https://github.com/siddg97/Simple-Expression-Evaluator-and-Simplifier" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="github" style={{fontSize:80, color:'black'}}/></a></center>
									</Typography>
								</div>
							</div>
						</Content>
					</Layout>
				</TabPane>
				<TabPane
				  tab={
					<span>
						8-Puzzle Problem {"   "}
						<Icon type="table" style={iStyle}/>
					</span>
				  }
				  key="6"
				>
					<Layout style={{minHeight:"95vh"}}>
					<Header className="hvr-underline-from-right port-header"> Search Algorithms and Heuristics </Header>
						<Content>
							<div className="flex-container">
								<div className="flex-item ep-img" />
								<div className="flex-item">
									<Typography className="about-content flow-text">
									   	<Paragraph>
											While studying the course CMPT310 (Artificial Intelligence Survey) at Simon Fraser University in the Summer 2019 session, I was given an assignment to implement a subroutine that would solve 10 or more instances of unsolved 8 puzzles problems and use certain heuristics like the Missing-Tile Heuristic and the Manhattan-Distance Heuristic to measure the robustness and efficiency of the A-start search algorithm. I used the aima-python library available on github for the implementations of the search algorithms and implemented my own heuristic functions to measure certain data about the experiment.
										</Paragraph>
										<Paragraph>
											You can find the source code for this project on <a href="https://github.com/siddg97/aima-python/tree/a1" target="_blank" rel="noopener noreferrer">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
										</Paragraph>
										<br/><br/><br/>
										<center><a href="https://github.com/siddg97/aima-python/tree/a1" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="github" style={{fontSize:80, color:'black'}}/></a></center>
									</Typography>
								</div>
							</div>
						</Content>
					</Layout>
				</TabPane>
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