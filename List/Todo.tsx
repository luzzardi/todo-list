import React, { FunctionComponent } from 'react';
import Task from '../Models/task';

interface Props {
  toggleTaskCompleted: (taskToComplete: Task) => void;
  deleteTask: (taskToDelete: Task) => void;
  task: Task;
}

export const Todo: FunctionComponent<Props> = ({
  task,
  toggleTaskCompleted,
  deleteTask
}) => {
  function onChange() {
    return toggleTaskCompleted(task);
  }
  function onClick() {
    return deleteTask(task);
  }
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={task.id.toString()}
          type="checkbox"
          checked={task.completed}
          onChange={onChange}
        />
        <label className="todo-label" htmlFor={task.id.toString()}>
          {task.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{task.name}</span>
        </button>
        <button type="button" className="btn btn__danger" onClick={onClick}>
          Delete <span className="visually-hidden">{task.name}</span>
        </button>
      </div>
    </li>
  );
};
