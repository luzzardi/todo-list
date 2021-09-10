import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './List/List';
import './style.css';

let DATA = [
  { id: 1, name: 'Eat', completed: true, key: 1 },
  { id: 2, name: 'Sleep', completed: false, key: 2 },
  { id: 3, name: 'Repeat', completed: false, key: 3 }
];

render(<List tasks={DATA} />, document.getElementById('todo-list'));
