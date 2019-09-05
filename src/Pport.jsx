import React from "react"
import { Row, Col, Card, Icon, Typography } from 'antd';
import cp from './Images/cp.png';
import lw from './Images/lw.png';
import cb from './Images/cb.png';

const { Paragraph } = Typography;

const projects = [
		{
			header:"LetWork",
			iconType:"code",
			git:"https://github.com/siddg97/letWork-server",
			metaLink:"",
			descr:"A MERN stack app which serves as a platform to connect students of similar intersts to collaborate and create meaningful projects",
			imgsrc:lw
		},
		{
			header:"CasterBot",
			iconType:"robot",
			git:"https://github.com/siddg97/CasterBot",
			metaLink:"",
			descr:"A vanilla JavaScript discord chatbot which fetches present weather conditions of any city and forecasts as well.",
			imgsrc:cb
		},
		{
			header:"colorP",
			iconType:"bg-colors",
			git:"https://github.com/siddg97/colorP",
			metaLink:"https://pypi.org/project/colorp/",
			descr:"A package that uses ANSI-compaitanle codes and provideds methods to beautifully format and style text which can be printed on consoles",
			imgsrc:cp
		},
];

class Pport extends React.Component {
	render(){
		const iStyle={fontSize:40, color:'black'};
		return(
			<div>
				<Row type="flex"gutter={24}>
				{
				projects.map((item,i) => 
					<Col xs={24} sm={24} md={12} lg={6} key={i}>
						<Card hoverable title={<center><span> <Icon type={item.iconType}/>{" "+item.header}</span></center>} style={{marginBottom:15}} cover={<div style={{'padding':1}}><img alt="" className="card-img" src={item.imgsrc}/></div>}>
							<center>
								<Paragraph> {item.descr} </Paragraph>
								<a href={item.git} target="_blank" rel="noopener noreferrer" style={iStyle} className="hvr-pulse"><Icon type="github"/> </a><br/>
								<a href={item.metaLink} target="_blank" rel="noreferrer noopener">More Info</a>
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

export default Pport