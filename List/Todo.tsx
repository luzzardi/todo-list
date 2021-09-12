import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import Task from '../Models/task';

interface Props {
  editTask: (taskToComplete: Task, name) => void;
  toggleTaskCompleted: (taskToComplete: Task) => void;
  deleteTask: (taskToDelete: Task) => void;
  task: Task;
}

export const Todo: FunctionComponent<Props> = ({
  task,
  editTask,
  toggleTaskCompleted,
  deleteTask
}) => {
  const [name, setName] = useState(task.name);
  const [isEditing, setEditing] = useState(false);
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  const wasEditing = usePrevious(isEditing);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  function onEdit(e) {
    setName(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    editTask(task, name);
    setEditing(false);
    setName('');
  }
  function onChange(e) {
    e.preventDefault();
    return toggleTaskCompleted(task);
  }
  function onClick() {
    return deleteTask(task);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={onSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={task.id.toString()}>
          New name for {task.name}
        </label>
        <input
          id={task.id.toString()}
          className="todo-text"
          type="text"
          onChange={onEdit}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {task.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
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
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit <span className="visually-hidden">{task.name}</span>
        </button>
        <button type="button" className="btn btn__danger" onClick={onClick}>
          Delete <span className="visually-hidden">{task.name}</span>
        </button>
      </div>
    </div>
  );
  return (
    <li key={task.key.toString()} className="todo">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
};
