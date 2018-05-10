import React, { Component } from 'react';

import Child_2 from './Child_2';

class Example_3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter1: 0,
			counter2: 0,
			counter3: 0,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(name) {
		this.setState({
			[name]: this.state[name] + 1
		})
	}

	render() {
		return (
			<div>
				<h2> Example 3 (Container 사용) </h2>
				<Child_2 name='counter1' handleClick={this.handleClick} counter={this.state.counter1} />
				<Child_2 name='counter2' handleClick={this.handleClick} counter={this.state.counter2} />
				<Child_2 name='counter3' handleClick={this.handleClick} counter={this.state.counter3} />
			</div>
		);
	}
}

export default Example_3;
