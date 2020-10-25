import { ProxyState } from "../AppState.js"
import TodoController from "../Controllers/TodoController.js";
import Todo from "../Models/Todo.js"
import { api } from "../Services/AxiosService.js";

let url = 'josh/todos/'

class TodoService {

  async getTodos() {
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(rawData => new Todo(rawData))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    this.getTodos()
  }

  async toggleTodoStatus(id) {
    let todo = await ProxyState.todos.find(t=> t.id == id);
    (todo.completed) ? todo.completed = false : todo.completed = true
    let res = await api.put(url+id, todo);

    this.getTodos()
  }

  async removeTodo(id) {
    let res = await api.delete(url+id);
    // @ts-ignore
    let todos = await ProxyState.todos.find(t=> t.id != id)
    // ProxyState.todos.concat(todos)
    ProxyState.todos = [...ProxyState.todos, todos]
  }

  constructor() {
  }
}

export const todoService = new TodoService();
