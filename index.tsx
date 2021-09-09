import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import AppState from './States/AppState';
import List from './List/List';
import './style.css';

interface AppProps {}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<List />, document.getElementById('todo-list'));
