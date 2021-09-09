import React, { Component } from 'react';
import { render } from 'react-dom';
import ListInterface from '../States/ListInterface';
import ListProps from '../States/ListProps';
import Tasks from './Tasks';
import Add from './Add';

export default class List extends Component<ListProps, ListInterface> {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Todo List',
      tasks: []
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Tasks tasks={this.state.tasks} />
        <Add />
      </div>
    );
  }
}
