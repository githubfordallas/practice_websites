// *** Version 3 *** //

// It should store the todos array on an object
// It should have a display todos method
// It should have an add todos method
// It should have a change todos method
// It should have a delete todos method

var todoList = {
  todos: [],

  displayTodo: function() {
    console.log('My todos:', this.todos);
  },

  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodo();
  },

  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodo();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodo();
  }
};
