import React from 'react';
import {Layout, Typography, Icon, Divider} from 'antd';

const {Header, Content} = Layout;
const {Text} = Typography;

class Home extends React.Component {
	render(){
		return(
			<Layout className="l">
				<Header className="hvr-underline-from-right header" style={{fontSize:'30px'}}> Siddharth Gupta </Header>
	            <Content>
	              	<Typography className="home-content">
	              		<b className="hvr-pulse greeting">Welcome!</b>
	              		<br/>
		              	Hi, my name is <b>Siddharth Gupta</b>.<br/>I am a <b>Software Developer</b>, <b>Thinker</b> and an undergraduate student.<br/> I also love to build things. One could say I am a <b>Builder</b>.<br/> I am originally from <b>India</b> but am currently studying in <b>Vancouver, Canada</b>.<br/>
		              	<Divider/>
	              		<center><Text strong> To know more about me, view the About page on this website. You can also view my resume by clicking below!</Text><br/><br/></center>
	              		<center><a href="https://docs.google.com/document/d/14Z7tUfuLhwx0lKbJViNPtkLvyQ2UkHJis1XB7bExJeI/edit?usp=sharing" className="hvr-pulse" target="_blank" rel="noopener noreferrer"><Icon type="container" style={{fontSize: 80}} /></a></center>
	              	</Typography>
	            </Content>
	        </Layout>
		)
	}
}

export default Home