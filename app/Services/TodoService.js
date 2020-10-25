import { ProxyState } from "../AppState.js"
import TodoController from "../Controllers/TodoController.js";
import Todo from "../Models/Todo.js"
import { api } from "../Services/AxiosService.js";

let url = 'josh/todos/'

class TodoService {
  // async modifyTodo(id) {
  //   let todo = await ProxyState.todos.find(t => t.id == id)

  //   let res = api.put(url, todo)
  // }

  async getTodos() {
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(rawData => new Todo(rawData))
    console.log(res.data.data);
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data.data)]
    console.log(res.data.data);
  }

  async toggleTodoStatus(id) {
    let todo = await ProxyState.todos.find(t => t.id == id);
    (todo.completed) ? todo.completed = false : todo.completed = true
    let res = await api.put(url+id, todo);
    let index = await ProxyState.todos.findIndex(t => t.id == id)
    ProxyState.todos[index] = todo
    ProxyState.todos = ProxyState.todos
    console.log(res);
  }

  async removeTodo(id) {
    let res = await api.delete(url+id);
    ProxyState.todos = ProxyState.todos.filter(t=> t.id != id)
    console.log(res);
  }

  constructor() {
  }
}

export const todoService = new TodoService();
