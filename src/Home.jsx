import React from 'react';
import {Layout, Typography, Icon, Divider} from 'antd';

const {Header, Content} = Layout;
const {Paragraph, Text} = Typography;

class Home extends React.Component {
	render(){
		
		return(
			<Layout>
				<Header className="header hvr-underline-from-right"> Siddharth Gupta </Header>
	            <Content style={{ margin: '24px 16px 0', padding:'24px' }}>
	            <center>
	            	<Header className="header hvr-underline-from-right"> Welcome!! </Header>
	              	<Typography className="home-content">
		              	<Paragraph> I'm an international student from india studying computing science at Simon Fraser University, Burnaby, BC, Canada. I have a passion for technology and I enjoy programming to solve real world problems!</Paragraph>
		              	<br/>
		              	<Divider/>
		              	<br/>
		              	<center>
		              		<Text strong> To know more about me, view the About page on this website. You can also view my resume by clicking below!</Text><br/><br/>
		              		<a href="https://docs.google.com/document/d/1GGBiwiZ6pfAMN4LKOUTdFmDGCc1ohPnhJBodfgwD0EY/edit?usp=sharing" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="container" style={{fontSize: 80}} /></a>
		              	</center>
	              </Typography>
	            </center>
	            </Content>
	        </Layout>
		)
	}
}

export default Home