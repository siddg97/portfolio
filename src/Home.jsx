import React from 'react';
import {Layout} from 'antd';


const {Header, Content} = Layout;
class Home extends React.Component {
	render(){
		return(
			<Layout>
				<Header className="header" style={{"fontSize":"40px","color":"white", height: "auto", padding: "29px"}}> Welcome to "My Domain" on the Internet </Header>
	            <Content style={{ margin: '24px 16px 0', padding:'24px' }}>
	              <div className="home-content"style={{ padding: 24, background: 'rgba(202, 211, 200,1.0)'}}>Hi, I am Siddharth! I'm an international student from india studying computing science at Simon Fraser University, Burnaby, BC, Canada. <br/> I have apasion for technology and enjoy coding! I also play video games and enjoy weighlifting in my free time.</div>
	            </Content>
	        </Layout>
		)
	}
}

export default Home