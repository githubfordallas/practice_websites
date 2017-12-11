// *** Version 2 *** //

// It should have a todo
// It should have a function to display todos
// It should have a function to add todos
// It should have a function to change todos
// It should have a function to delete todos

var todos = ['item 1', 'item 2', 'item 3'];

function displayTodo() {
  console.log('My todos:', todos);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodo();
}

function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodo();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodo();
}
