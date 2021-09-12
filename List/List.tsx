import React, { Component, useState } from 'react';
import { Todo } from './Todo';
import Form from './Form';
import FilterButton from './FilterButton';
import Task from '../Models/task';

interface ListState {
  newTask: Task;
  tasks: Task[];
  filterType: string;
}

export default class List extends Component<{ tasks: Task[] }, ListState> {
  state = {
    newTask: {
      id: 1,
      name: '',
      completed: false,
      key: 1
    },
    tasks: [],
    filterType: 'All'
  };

  FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };

  constructor(props) {
    super(props);
    this.toggleTaskCompleted = this.toggleTaskCompleted.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.state.tasks = props.tasks || [];
  }

  private setFilter(name) {
    this.setState(previousState => ({
      filterType: name
    }));
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

  private editTask(taskToEdit: Task, name) {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.map(task => {
          if (task.id === taskToEdit.id) {
            return { ...task, name };
          }
          return task;
        })
      ]
    }));
  }

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
    const FILTER_NAMES = Object.keys(this.FILTER_MAP);
    const filterList = FILTER_NAMES.map(name => (
      <FilterButton key={name} filterName={name} setFilter={this.setFilter} />
    ));
    const taskList = this.state.tasks
      .filter(this.FILTER_MAP[this.state.filterType])
      .map(task => {
        return (
          <Todo
            key={task.key}
            task={task}
            editTask={this.editTask}
            toggleTaskCompleted={this.toggleTaskCompleted}
            deleteTask={this.deleteTask}
          />
        );
      });
    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form addTask={this.addTask} />
        <div className="filters btn-group stack-exception">{filterList}</div>
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
