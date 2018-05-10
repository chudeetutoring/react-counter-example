import React, { Component } from 'react';

import Example_1 from './Example_1';
import Example_2 from './Example_2';
import Example_3 from './Example_3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Counter 예제 </h1>
	      <Example_1 />
	      <Example_2 />
	      <Example_3 />
      </div>
    );
  }
}

export default App;
