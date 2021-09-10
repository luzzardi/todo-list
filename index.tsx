import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './List/List';
import './style.css';

let DATA = [
  { id: 'todo-0', name: 'Eat', completed: true },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false }
];

if (localStorage.getItem('tasks')) {
  DATA = JSON.parse(localStorage.getItem('tasks'));
} else {
  localStorage.setItem('tasks', JSON.stringify(DATA));
}

render(<List tasks={DATA} />, document.getElementById('todo-list'));
