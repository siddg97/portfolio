import React from 'react';
import { Tabs, Icon, Layout, Typography, Divider } from 'antd';
import my from './Images/me.jpg'
import sfu4 from './Images/SFU4.jpg'

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;
const { Content, Header } = Layout
class About extends React.Component {
	render(){
		return (
			<Tabs defaultActiveKey="1" size="large" type="line">
			    <TabPane
			      tab={
			        <span style={{fontFamily:"Poppins"}}>
			          <Icon type="smile" style={{"fontSize":"25px"}} />
			          About Me
			        </span>
			      }
			      key="1"
			    >
				    <Layout>
				    	<Content style={{ margin: '24px 16px 0', padding: '24px' }}>
				    		<Header className="header"> A little about me.... </Header>
				    		<Typography className="home-content">
				    			<center>
				    				<img src={my} className="my-img" alt=''/>
				    			</center>
				    			<Divider/>
							   	<Paragraph>
							      I am a undergraduate student studying computing science. I have experience in managing and developing software in both individual and team enviornments. I am fueled by my passion for understanding the working of technologies in the field of computing science and by my fascination of how two bits 0 and 1 have transformed the world of technolgy and software today. I considers myself a <Text strong>‘forever student’</Text> eager to both build on my academic foundations and stay in tune with the latest software technologies and strategies through continuous learning.
							    </Paragraph>
							    <Paragraph>
							     My hunger for knowledge and determination to turn information into action has contributed greatly in my university career. I believe in mindfulness is the key to success - a tenet I live throughout my interests in weightlifting, programming, problem-solving, and even while palying video games. I have worked on a number of academic projects and am currently working on a few personal projects but I am always interested in a challenge!
							    </Paragraph>
				    		</Typography>
				    	</Content>
				    </Layout>
			    </TabPane>
			    <TabPane
			      tab={
			        <span style={{fontFamily:"Poppins"}}>
			          <Icon type="book" style={{"fontSize":"25px"}} />
			          Education
			        </span>
			      }
			      key="2"
			    >
				    <Layout>
				       	<Content style={{ margin: '24px 16px 0', padding: '24px' }}>
				       		<Header className="header"> Simon Fraser university, Burnaby, BC </Header>
							<img src={sfu4} className="sfu-img" alt=''/>
				       		<Typography className="home-content">				       		
				       			<Title>Siddharth Gupta</Title>
				    			<Divider/>
				    			<Paragraph>
				    			I started my post-secondary education in the fall term of 2015 and started pursuing my goal of getting a Bachelors in Computing Science. I was very excited to have been given the oppurtunity to travel halfway around the globe from India to British Columbia, Canada to pursue my university career. I had litlle to no formal programming knowledege nor any experience of sort in working with computer software(s).
				    			</Paragraph>
				    			<Paragraph>
				    			After my first year of studying Computing Sciences I started forming a grip on a handful of programming languages, techniques and tools. Even though I still have a lot to still learn, throughout the subsequent years my grip in this field has become stronger and stronger. There is one thing for cetain that I can say with confidence is that I consider myself really happy to have chosen this field of studies while pursuing my post-secondary education and have started to develop a passion for CS.
				    			</Paragraph>
				    			<Paragraph>
				    			I am currently in my last year of studies before completing my Bachelors in Computing Science. My expected graduation date is mid June 2020. Throughout my university experience till now at SFU I have developed several technical and soft skills, which I strongly believe I could not have developed in India simply due to the lack of infrastructure, appropiate exposures and stimulii which I have experienced here in Canada. I have met a great deal of geniuine and bright people here at SFU and they have also played a major role in my metamorphis from a freshman international CS student to one who is constantly looking for different ways to exercise the skills and techniques learnt in academia to solve real-word problems and help the world become a more modern place with more modern experiences.
				    			</Paragraph>
				       		</Typography>
				        </Content>
				    </Layout>
			    </TabPane>
			</Tabs>
		)
	}
}

export default About