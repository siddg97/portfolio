import React from 'react';
import {Button, Typography} from 'antd';

const {Paragraph} = Typography;

class ToggleEllipsis extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			expand: false,
			counter: 0
		};
	}

	ellipExpand = () => {
		this.setState({
			expand: true,
			counter: !this.state.expand ? this.state.counter : this.state.counter+1
		});
	};

	ellipClose = () => {
		this.setState({
			expand: false,
			counter: !this.state.expand ? this.state.counter : this.state.counter+1
		});
	};

	renderEllip(text){
		return (
			<div key={this.state.counter}>
				<Paragraph ellipsis={{rows:this.props.rows, expandable:true, onExpand: this.ellipExpand}}>
					{text}
				</Paragraph>
			</div>
		)
	}

	render(props) {
		return (
			<div>
				{this.renderEllip(this.props.text)}
				{this.state.expand && <Button type="primary" onClick={this.ellipClose}>Collapse</Button>}
			</div>
		)
	}
}

export default ToggleEllipsis