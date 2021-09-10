import React, { Component } from 'react';
import { AppProps, TodoState } from '../States/';

export default class Todo extends Component<AppProps, TodoState> {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      completed: props.completed,
      toggleTaskCompleted: id => props.toggleTaskCompleted(id),
      deleteTask: id => props.deleteTask(id)
    };
  }
  render() {
    return (
      <li className="todo stack-small">
        <div className="c-cb">
          <input
            id={this.state.id}
            type="checkbox"
            defaultChecked={this.state.completed}
            onChange={() => this.state.toggleTaskCompleted(this.state.id)}
          />
          <label className="todo-label" htmlFor={this.state.id}>
            {this.state.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{this.state.name}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => this.state.deleteTask(this.state.id)}
          >
            Delete <span className="visually-hidden">{this.state.name}</span>
          </button>
        </div>
      </li>
    );
  }
}
