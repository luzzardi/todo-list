import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import AppState from './States/AppState';
import List from './List/List';
import './style.css';

interface AppProps {}

const DATA = [
  { id: 'todo-0', name: 'Eat', completed: true },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false }
];

// class App extends Component<AppProps, AppState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>Start editing to see some magic happen :)</p>
//       </div>
//     );
//   }
// }

render(<List tasks={DATA} />, document.getElementById('todo-list'));
