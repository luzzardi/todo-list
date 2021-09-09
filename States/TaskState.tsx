export enum taskState {
  todo,
  done
}

export default interface TaskState {
  task: string;
  state: taskState.todo;
}
