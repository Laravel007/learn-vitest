export type Todo = {
  text: string;
};

let todos: Todo[] = [];

export function getTodos(todos: Todo[]) {
  return todos;
}

// add function
export function addTodoItem(todos: Todo[], text: string) {
  const newTodos = [...todos, { text }];
  return newTodos;
}

// delete function
export function deleteTodoItem(index: number) {
  todos.splice(1, index);
}

// edit function
// export function editTodoItem(index: number, value: string) {
//     todos[index].item = value
// }
