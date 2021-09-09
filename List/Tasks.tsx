import React, { Component } from 'react';
import TaskProps from '../States/TaskProps';
import TaskState, { taskState } from '../States/TaskState';

export default class Tasks extends Component<TaskProps, TaskState> {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      state: taskState.todo
    };
  }

  render() {
    const insert = (
      <div>
        <input type="radio" value={this.state.state} />
        <input type="text" value={this.state.task} />
      </div>
    );
    return insert;
  }
}
