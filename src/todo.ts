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
export function deleteTodoItem(todos: Todo[], todoIndex: number) {
  const newTodos = todos.filter((_, index) => index !== todoIndex);
  return newTodos;
}

// edit function
// export function editTodoItem(index: number, value: string) {
//     todos[index].item = value
// }
