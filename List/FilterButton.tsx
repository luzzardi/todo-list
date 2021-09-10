import React, { Component } from 'react';

export default class FilterButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>all </span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
  }
}
