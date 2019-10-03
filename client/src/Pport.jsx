import React from "react"
import { Row, Col, Card, Icon, Tag } from 'antd';
import ToggleEllipsis from './ToggleEllipsis.jsx';
import cp from './Images/cp.png';
import lw from './Images/lw.png';
import cb from './Images/cb.png';
import pw from './Images/pw.png';

const projects = [
		{
			header:"CasterBot",
			iconType:"robot",
			git:"https://github.com/siddg97/CasterBot",
			metaLink:"",
			descr:"A vanilla JavaScript discord chatbot which fetches present weather conditions of any city and forecasts as well.",
			imgsrc:cb,
			tags:["OWM","JavaScript"]
		},
		{
			header:"colorP",
			iconType:"bg-colors",
			git:"https://github.com/siddg97/colorP",
			metaLink:"https://pypi.org/project/colorp/",
			descr:"A package that uses ANSI-compaitanle codes and provideds methods to beautifully format and style text which can be printed on consoles",
			imgsrc:cp,
			tags:["python","pip","ANSI"]
		},
		{
			header:"LetWork",
			iconType:"code",
			git:"https://github.com/siddg97/letWork-server",
			metaLink:"",
			descr:"A MERN stack app which serves as a platform to connect students of similar intersts to collaborate and create meaningful projects",
			imgsrc:lw,
			tags:["MERN","REST"]
		},
		{
			header:"Portfolio Website",
			iconType:"profile",
			git:"https://github.com/siddg97/portfolio",
			metaLink:"http://www.siddg.info",
			descr:"A single page react app with minimalistic design for a neat and immersive personal portfolio website. Deployed on Heroku.",
			imgsrc:pw,
			tags:["reactJS","heroku","HTML","CSS"]
		}
];

class Pport extends React.Component {
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
						<Card hoverable title={<center><span> <Icon type={item.iconType}/>{" "+item.header}</span></center>} headStyle={cardHeadStyle} style={projStyle} cover={<div style={{'padding':1}}><img alt="" className="card-img" src={item.imgsrc}/></div>}>
							<center>
								<ToggleEllipsis text={item.descr} rows={3}/>
								<a href={item.git} target="_blank" rel="noopener noreferrer" style={picStyle} className="hvr-pop"><Icon type="github"/> </a>
								<br/>
								<a href={item.metaLink} target="_blank" rel="noreferrer noopener">More Info</a>
								<br/>
								{
									item.tags.map((elem,i) =>
										<Tag color="green" key={i}>{elem}</Tag>
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

export default Pport