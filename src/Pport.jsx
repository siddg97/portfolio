import React from "react"
import { Tabs, Icon, Layout, Typography} from 'antd';

const { Paragraph } = Typography;
const { TabPane } = Tabs;
const { Header, Content } = Layout

class Pport extends React.Component {
	render(){
		const iStyle = {fontSize:25, color:'green'}
		return(
			<Tabs defaultActiveKey="1" size="large" tabBarGutter={10} tabPosition={'left'} style={{minHeight:"87.8vh"}}>
				<TabPane
				  tab={
					<span>
						colorP {"   "}
						<Icon type="bg-colors" style={iStyle}/>
					</span>
				  }
				  key="1"
				>
					<Layout style={{minHeight:"95vh"}}>
						<Header className="hvr-underline-from-right port-header"> A lightweight Python pip Package </Header>
						<Content>
							<div className="flex-container">
								<div className="flex-item cp-img" />
								<div className="flex-item">
									<Typography className="about-content">
									   	<Paragraph>
									   		My inspiration for this package was when I found out that one could use ANSI-compaitabile codes for styling and coloring text which would be printed on a console. I looked around the web and decided to make my own package for this purpose. This ptoject is in its early stages of development. However you can find out more about this package <a href="https://pypi.org/project/colorp/" target="_blank" rel="noopener noreferrer">here</a>. This package can be used with pyhton2.7 and upwards.
										</Paragraph>
										<Paragraph>
											You can find the source code for this project on <a href="https://github.com/siddg97/colorP" target="_blank" rel="noopener noreferrer">GitHub</a>. If you like this project do star the GitHub repository. If you would like to suggest ammends to this project you can fork the repository, make ammends and then open a pull request. All contributions are appreciated!
										</Paragraph><br/><br/><br/>
										<center><a href="https://github.com/siddg97/colorP" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="github" style={{fontSize:80, color:'black'}}/></a></center>
									</Typography>
								</div>
							</div>
						</Content>
					</Layout>
				</TabPane>
				<TabPane
				  tab={
					<span>
						CasterBot{"   "}
						<Icon type="cloud" style={iStyle}/>
					</span>
				  }
				  key="2"
				>

				</TabPane>
				<TabPane
				  tab={
					<span>
						Letwork{"   "}
						<Icon type="experiment" style={iStyle}/>
					</span>
				  }
				  key="3"
				>

				</TabPane>
			</Tabs>
		);
	}
}

export default Pport