// *** Version 7 *** //

// There should be a "Display todos" and "Toggle all" buttons
// Clicking "Display todos" should run todoList.displayTodos
// Clicking "Toggle all" should run todoList.toggleAll

var todoList = {
  todos: [],

  displayTodo: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('[X]', this.todos[i].todoText);
        } else {
          console.log('[ ]',this.todos[i].todoText);
        }
      }
    }
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
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodo();
  }
};

// Grabbing DOM objects
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

// Event Listeners
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodo();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
