import React, { Component } from 'react';

import Child_1_1 from './Child_1_1';
import Child_1_2 from './Child_1_2';
import Child_1_3 from './Child_1_3';

class Example_2 extends Component {
	render() {
		return (
			<div>
				<h2> Example 2 (Container 사용 X) </h2>
				<Child_1_1 />
				<Child_1_2 />
				<Child_1_3 />
			</div>
		);
	}
}

export default Example_2;
