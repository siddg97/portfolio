import React from 'react';
import { Avatar, Card, Icon, Row, Col, Layout, Typography} from 'antd';

const { Text } = Typography;
const { Content } = Layout

const data = {
	about: 
		<Text className="about-content">
			I am currently an undergarduate student majoring in Computing Science. My relevant experiences include managing and developing software in individual 
			and team enviornments. My passion is fueled by my understanding of technologies in the field of computing science and fascination of how two bits 0 and 1 
			have transformed technolgy and software today. I consider myself a <Text strong>forever student</Text>. I am eager to build on my academic foundations 
			and stay in tune with the latest software technologies and strategies through continuous learning.
			<br/><br/>
			My hunger for knowledge and determination to produce actionable information has contributed greatly in my university career. I believe in mindfulness is 
			the key to success - a tenet I live throughout my interests in programming, problem-solving, and even while palying video games. I have worked on a number 
			of academic projects and am currently working on a few personal projects but I am always interested in a challenge!
		</Text>
	,
	education:
		<Text className="about-content">
			I began my undergarduate carrer by traveling halfway around the globe from Delhi, India to Vancouver, Canada to study at <Text strong> Simon Fraser University,
			Burnaby</Text>. After my first year of studies I had a grip on a handful of programming languages and some software techniques and tools. Throughout the subsequent
			years my grip has become stronger and stronger. I consider myself really happy to have chosen this field of studies and have started developed a passion for CS.
			<br/><br/>
			I am currently in my last year of studies before grafuating with my Bachelors in Computing Science. My expected graduation date is mid <Text strong>June 2021</Text>. 
			Throughout my current university experience at SFU I have developed several technical and soft skills. I have met a great deal of bright and geniuine people at SFU 
			who also play an important role in my education.
		</Text>

}

class About extends React.Component {
	render(){
		const cardStyle = {margin:'auto',marginBottom:24,marginTop:24,width:'80vw'}
		const wrapperStyle = {paddingTop:32, paddingBottom:32, backgroundColor:'#ececec'}
		const contentStyle = {marginBottom:24}
		return (
			<Layout className="l">
				<Content>
					<div style={wrapperStyle}>
						<Card title={
							<span className="card-header hvr-pulse">
								<b><Icon type="edit"/></b>
								<b> About Me </b>
							</span>}
							bordered={true}
							hoverable={true}
							style={cardStyle}
						>
							<Row type="flex" gutter={24} justify="center" align="middle">
								<Col xs={24} sm={24} md={24} lg={24} xl={8}>
										<center><Avatar src={'/assets/me.jpg'} style={{minHeight:'30vh',minWidth:'30vh',marginBottom:24}} className="hvr-grow"/></center>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={16}>
									<Card hoverable style={contentStyle}>
										{data.about}
									</Card>
								</Col>
							</Row>
						</Card>
						<Card title={
							<span className="card-header hvr-pulse">
								<b><Icon type="read"/></b>
								<b> Education </b>
							</span>}
							bordered={true}
							hoverable={true}
							style={cardStyle}
						>
							<Row type="flex" gutter={24} justify="center" align="middle">
								<Col xs={24} sm={24} md={24} lg={12}>
									<Card hoverable style={contentStyle}>
										{data.education}
									</Card>
								</Col>
								<Col xs={24} sm={24} md={24} lg={12}>
									<div style={contentStyle}>
										<center><img src={'/assets/SFU4.jpg'} className="sfu-img" alt=''/></center>
									</div>
								</Col>
							</Row>
						</Card>
					</div>
				</Content>
			</Layout>
		)
	}
}

export default About
