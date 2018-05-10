import React, { Component } from "react";

const styles = {
	'border': '0',
	'fontSize': '100px',
	'margin': '30px',
	'backgroundColor': '#fff'
};

class Child_1_3 extends Component {
	constructor() {
		super();
		this.state = {
			counter : 0
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	render() {
		return (
			<button style={styles} onClick={this.handleClick}>
				{this.state.counter}
			</button>
		)
	}
}

export default Child_1_3;