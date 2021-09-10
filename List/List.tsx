import React, { Component, useState } from 'react';
import { Todo } from './Todo';
import Form from './Form';
import FilterButton from './FilterButton';
import Task from '../Models/task';

interface ListState {
  newTask: Task;
  tasks: Task[];
}

export default class List extends Component<{ tasks: Task[] }, ListState> {
  state = {
    newTask: {
      id: 1,
      name: '',
      completed: false,
      key: 1
    },
    tasks: []
  };

  constructor(props) {
    super(props);
    this.toggleTaskCompleted = this.toggleTaskCompleted.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state.tasks = props.tasks || [];
  }

  private addTask = name => {
    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: '',
        completed: previousState.newTask.completed,
        key: previousState.newTask.id + 1
      },
      tasks: [...previousState.tasks, { ...previousState.newTask, name }]
    }));
  };

  private toggleTaskCompleted(taskToComplete: Task) {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.map(task => {
          if (task.id === taskToComplete.id) {
            return { ...task, completed: !task.completed };
          }
          return task;
        })
      ]
    }));
  }

  private deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };

  render() {
    const taskList = this.state.tasks.map(task => {
      return (
        <Todo
          task={task}
          toggleTaskCompleted={this.toggleTaskCompleted}
          deleteTask={this.deleteTask}
        />
      );
    });
    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form addTask={this.addTask} />
        <div className="filters btn-group stack-exception">
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <h2 id="list-heading">
          {this.state.tasks.length} task{this.state.tasks.length > 1 ? 's' : ''}{' '}
          remaining
        </h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    );
  }
}
