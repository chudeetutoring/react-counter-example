import React, {Component} from "react";

const styles = {
	'border': '0',
	'fontSize': '100px',
	'margin': '30px',
	'backgroundColor': '#fff'
};

class Child_2 extends Component {
	render() {
		return (
			<button
				style={styles}
				onClick={() => this.props.handleClick(this.props.name)}
			>
				{this.props.counter}
			</button>
		)
	}
}

export default Child_2;