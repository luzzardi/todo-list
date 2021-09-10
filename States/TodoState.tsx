export default interface TodoState {
  id: string;
  name: string;
  completed: boolean;
  toggleTaskCompleted: Function;
  deleteTask: Function;
}
