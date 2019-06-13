import React from 'react';
import {Card, Col, Row, Layout, Icon, Divider} from 'antd';

const {Header, Content} = Layout;


class Contact extends React.Component {
	render(){
		return(
			<Layout>
				<Header className="header hvr-underline-from-right"> Get in touch with me... </Header>
				<Content style={{ margin: '24px 16px 0', padding: '24px' }}>
					<div style={{background:'#ececec', padding:30, color:'white'}}>
						<Row gutter={16}>
							<Col span={8}>
								<Card title={
									<center>
										<span className="card-header hvr-grow">
									        <Icon type="mail"/>
									       	<h3> E-Mail </h3>
								        </span>
							        </center>
								} 
								bordered={false} 
								hoverable={true}
								>
								</Card>
							</Col>
							<Col span={8}>
								<Card title={
									<center>
										<span className="card-header hvr-grow">
									        <Icon type="bars"/>
									       	<h3> Forums </h3>
								        </span>
							        </center>
								} 
								bordered={false} 
								hoverable={true}>
								</Card>
							</Col>
							<Col span={8}>
								<Card title={
									<center>
										<span className="card-header hvr-grow">
									        <Icon type="team"/>
									       	<h3> Social Media </h3>
								        </span>
							        </center>
								} 
								bordered={false}
								hoverable={true}>
								</Card>
							</Col>
						</Row>
					</div>
				</Content>
			</Layout>
		)
	}
}

export default Contact