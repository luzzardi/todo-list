import React, { Component } from 'react';

interface FilterProps {
  filterName: string;
  setFilter: Function;
}
interface FilterState {
  filter: string;
  setFilter: Function;
}

export default class FilterButton extends Component<FilterProps, FilterState> {
  constructor(props) {
    super(props);
    this.state = {
      filter: props.filterName,
      setFilter: props.setFilter
    };
    this.setFilterName = this.setFilterName.bind(this);
  }

  private setFilterName(e) {
    e.preventDefault();
    console.log(this.state.filter);
    this.state.setFilter(this.state.filter);
  }

  render() {
    return (
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed="true"
        onClick={this.setFilterName}
      >
        <span className="visually-hidden">Show </span>
        <span>{this.state.filter} </span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
  }
}
