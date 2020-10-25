import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";

function _drawTodos() { 

  let template = ''
  ProxyState.todos.forEach(t => {template += t.Template})
  document.getElementById('todoList').innerHTML = template
  let taskCount = ProxyState.todos.filter(t => t.completed != true)
  document.getElementById('taskCount').innerText = taskCount.length.toString()

}


export default class TodoController {
  constructor() {
    ProxyState.on('todos', _drawTodos)
    todoService.getTodos();
  }

  
  // modifyTodo(todoId) {
  //   try {
  //     todoService.modifyTodo(todoId)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  
  }
  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let todo = {
      description: form.newTodoDesc.value
    };
    form.reset()
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }



}