// *** Version 4 *** //

// todoList.addTodo should add objects
// todoList.changeTodo should change the todo Text property
// todoList.toggleCompleted should change the completed property

var todoList = {
  todos: [],

  displayTodo: function() {
    console.log('My todos:', this.todos);
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodo();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodo();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodo();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodo();
  }
};
