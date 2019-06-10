import React from 'react';
import {Layout, Typography} from 'antd';

const {Header, Content} = Layout;
class Home extends React.Component {
	render(){
		return(
			<Layout>
				<Header className="header hvr-underline-from-right"> Welcome to "My Domain" on the Internet </Header>
	            <Content style={{ margin: '24px 16px 0', padding:'24px' }}>
	              <Typography className="home-content">Hi, I am Siddharth! I'm an international student from india studying computing science at Simon Fraser University, Burnaby, BC, Canada. <br/> I have a passion for technology and I enjoy programming! I also play video games and enjoy weighlifting in my free time.</Typography>

	            </Content>
	        </Layout>
		)
	}
}

export default Home