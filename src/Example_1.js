import React, { Component } from 'react';

const styles = {
	'border': '0',
	'fontSize': '100px',
	'margin': '30px',
	'backgroundColor': '#fff'
};

class Example_1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			counter: this.state.counter + 1
		})
	}

	render() {
		return (
			<div>
				<h2> Example 1 (State) </h2>
				<button
					style={styles}
					onClick={this.handleClick}
				>
					{this.state.counter}
				</button>
			</div>
		);
	}
}

export default Example_1;
