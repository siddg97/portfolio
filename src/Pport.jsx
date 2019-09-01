import React from "react"
import { Row, Col, Card, Icon, Typography } from 'antd';
import cp from './Images/cp.png'

const { Paragraph } = Typography;

const projects = [
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
				<Row type="flex"gutter={36}>
				{
				projects.map((item,i) => 
					<Col xs={24} sm={24} md={6} key={i}>
						<Card hoverable title={item.header} style={{minWidth:'20vw',minHeight:'50vh',marginBottom:16}} cover={<img alt="" className="card-img" src={item.imgsrc}/>}>
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