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
			descr:"A package that uses ANSI-compaitanle codes and provideds methods to beautifully format and style text which can be printed on consoles"
		},
];

class Pport extends React.Component {
	render(){
		const iStyle = {fontSize:25, color:'black'}
		return(
			<Row>
				<Col>
					<Card hoverable title={projects[0].header} style={{width:240}} cover={<img alt="Image" className="hvr-grow" src={cp}/>}>
						<Paragraph className=""> {projects[0].descr} </Paragraph>
						<a href={projects[0].git} target="_blank" rel="noopener noreferrer" style={{color:"black"}} className="hvr-pulse"><Icon type="github" style={iStyle} /> </a>
						<br/><a href={projects[0].metaLink} target="_blank" rel="noopener noreferrer"> More Info </a>
					</Card>
				</Col>
				<Col>
				</Col>
			</Row>
		);
	}
}

export default Pport