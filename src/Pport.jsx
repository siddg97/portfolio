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

export default Pport