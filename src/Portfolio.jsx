import React from "react"
import { Tabs, Icon, Layout, Typography} from 'antd';

const { Paragraph, Text } = Typography;
const { TabPane } = Tabs;
const { Header, Content } = Layout
class Portfolio extends React.Component {
	render(){
		return(
			<Tabs defaultActiveKey="1" size="large" type="line">
			    <TabPane
			      tab={
			        <span style={{fontFamily:"Poppins"}}>
			          <Icon type="box-plot" style={{"fontSize":"25px"}} />
			          Bounded - Buffer Problem
			        </span>
			      }
			      key="1"
			    >
			        <Layout>
				    	<Content style={{ margin: '24px 16px 0', padding: '24px' }}>
				    		<Header className="header" style={{"fontSize":"40px","color":"white", height: "auto", padding: "15px"}}> Simulation of the Producer-Consumer Problem </Header>
				    		<div className="flex-container">
				    			<div className="flex-item pcp-img" />
				    			<div className="flex-item">
						    		<Typography className="home-content"style={{ padding: 24, background: 'rgba(202, 211, 200,1.0)'}}>
									   	<Paragraph>
									    	While studying the course CMPT300 (Operating Systems I) at Simon Fraser University in the Spring 2019 session, I made a mutli-threaded C program called candykids. candykids simulated the producer-consumer problem in which children ate candies from a bounded-buffer and factories produced candies in the same bounded-buffer. The aim of the simulation was to avoid any type of race conditions and prevent a deadlock from occuring. I used the POSIX Threads library to be able to satisfy the synchronization of the use of the common bounded buffer between factories and children using pthread mutex locks and semaphores.
									    </Paragraph>
									    <Paragraph>
									    	You can find the source code for this project on <a href="https://github.com/siddg97/Producer-Consumer-Problem" className="hvr-grow" target="_blank">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
									    </Paragraph>
						    		</Typography>
						    	</div>
					    	</div>
				    	</Content>
				    </Layout>
			    </TabPane>
			    <TabPane
			      tab={
			        <span>
			          <Icon type="scan" style={{"fontSize":"25px"}} />
			          GNU/Linux Bash Shell C-Script
			        </span>
			      }
			      key="2"
			    >
			    	<Layout>
				    	<Content style={{ margin: '24px 16px 0', padding: '24px' }}>
				    		<Header className="header" style={{"fontSize":"40px","color":"white", height: "auto", padding: "15px"}}> Linux Command Shell with a few built-in commands </Header>
				    		<div className="flex-container">
				    			<div className="flex-item shell-img" />
				    			<div className="flex-item">
						    		<Typography className="home-content"style={{ padding: 24, background: 'rgba(202, 211, 200,1.0)'}}>
									   	<Paragraph>
									    	While studying the course CMPT300 (Operating Systems I) at Simon Fraser University in the Spring 2019 session, I made my very first C-script shell for the UNIX Bash Terminal. This shell is able to perform 7 different built-in commands using the fork() and the execvp() functions provided in C. This shell also has a custom signal handling function for when the SIGINT (Ctrl + C) signal is detected. The shell is also able to perform commands in the background as well. I also performed unit tests on every built-in command the shell supports and also used valgrind to test for memory leaks. 	
									    </Paragraph>
									    <Paragraph>
									    	You can find the source code for this project on <a href="https://github.com/siddg97/LinuxCustomShell-C" className="hvr-grow" target="_blank">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
									    </Paragraph>
						    		</Typography>
						    	</div>
					    	</div>
				    	</Content>
				    </Layout>
			    </TabPane>
			    <TabPane
			      tab={
			        <span>
			          <Icon type="deployment-unit" style={{"fontSize":"25px"}} />
			          Custom Linux Kernel
			        </span>
			      }
			      key="3"
			    >
			    	<Layout>
				    	<Content style={{ margin: '24px 16px 0', padding: '24px' }}>
				    		<Header className="header" style={{"fontSize":"40px","color":"white", height: "auto", padding: "15px"}}> Linux Kernel Patch with 2 system calls </Header>
				    		<div className="flex-container">
				    			<div className="flex-item kernel-img" />
				    			<div className="flex-item">
						    		<Typography className="home-content"style={{ padding: 24, background: 'rgba(202, 211, 200,1.0)'}}>
									   	<Paragraph>
									    	While studying the course CMPT300 (Operating Systems I) at Simon Fraser University in the Spring 2019 session, I made my very first custom Linux Kernel Patch. I cloned the entire linux kernel (v4.20.13) from Linus Trovalds original git repository and implemented 2 of my own system calls. The first system call would sum up a given an array of integers. The second system call I implemented showed all the information of a processes ancestors processes and isplayed helpful stats. The stats dont include data about zombie processes that might be running. I also tested these system calls on a virtual QEMU machine with a command line version of linux and used valgrind to check for memory leaks. This was (at that time) by far the most intriguing project I had ever done!
									    </Paragraph>
									    <Paragraph>
									    	You can find the source code for this project on <a href="https://github.com/siddg97/Custom-Linux-Kernel-Patch" className="hvr-grow" target="_blank">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
									    </Paragraph>
						    		</Typography>
						    	</div>
					    	</div>
				    	</Content>
				    </Layout>
			    </TabPane>
			    <TabPane
			      tab={
			        <span>
			          <Icon type="cluster" style={{"fontSize":"25px"}} />
			          Memory Management Interface
			        </span>
			      }
			      key="4"
			    >
			    	<Layout>
				    	<Content style={{ margin: '24px 16px 0', padding: '24px' }}>
				    		<Header className="header" style={{"fontSize":"40px","color":"white", height: "auto", padding: "15px"}}> Memory Allocation and Deallocation Interfaces </Header>
				    		<div className="flex-container">
				    			<div className="flex-item mm-img" />
				    			<div className="flex-item">
						    		<Typography className="home-content"style={{ padding: 24, background: 'rgba(202, 211, 200,1.0)'}}>
									   	<Paragraph>
									    	While studying the course CMPT300 (Operating Systems I) at Simon Fraser University in the Spring 2019 session, I implemented my own version of the free() and malloc() functions available in the C language to manage virtual memory. The implementation of these interfaces can work with three allocation algorithms, namely FIRST-FIT, WORST-FIT and BEST-FIT. The deallocation interface also supports compaction and actively looks for possible reallocation of stored memory to eliminate holes in contigious memory. There are also interfaces to access certain helpful statistics about the chunk of memory being used for allocation and deallocation.
									    </Paragraph>
									    <Paragraph>
									    	You can find the source code for this project on <a href="https://github.com/siddg97/Memory-management-interfaces-C" className="hvr-grow" target="_blank">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
									    </Paragraph>
						    		</Typography>
						    	</div>
					    	</div>
				    	</Content>
				    </Layout>
			    </TabPane>
			    <TabPane
			      tab={
			        <span>
			          <Icon type="interaction" style={{"fontSize":"25px"}} />
			          Expression Evaluator and Simplifier
			        </span>
			      }
			      key="5"
			    >
			    	<Layout>
				    	<Content style={{ margin: '24px 16px 0', padding: '24px' }}>
				    		<Header className="header" style={{"fontSize":"40px","color":"white", height: "auto", padding: "15px"}}> A Scheme Expression Evaluator </Header>
				    		<div className="flex-container">
				    			<div className="flex-item ee-img" />
				    			<div className="flex-item">
						    		<Typography className="home-content"style={{ padding: 24, background: 'rgba(202, 211, 200,1.0)'}}>
									   	<Paragraph>
									    	While studying the course CMPT383 (Comparative Programming Languages) at Simon Fraser University in the Summer 2019 session, I implemented an expression evaluator and simplifier in scheme. I set up 2 enviornments in which variables can be stored and their value as well. Each of these enviornments are compatible with the expression evaluator and simplifier. The expression it can evaluate are similar to the Go expression syntax and the simplification rules are also similar to the Go language. I also modularized the code to simplify refactoring and improve readability.
									    </Paragraph>
									    <Paragraph>
									    	You can find the source code for this project on <a href="https://github.com/siddg97/Simple-Expression-Evaluator-and-Simplifier" className="hvr-grow" target="_blank">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
									    </Paragraph>
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

export default Portfolio