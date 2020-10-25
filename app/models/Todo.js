export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.description = data.description
    this.completed = data.completed
  }

  get Template() {
    return /*html*/ `

      <li id="${this.id}" class="todo-list-item">
        <div>
          <label class="chbx-label">
            <input onchange="app.todoController.toggleTodoStatus('${this.id}')" type="checkbox" 
              class="chbx" id="chbx_${this.id}" ${this.completed ? 'checked' : ''}>
            <span class="chbx-span"></span>
          </label>
        </div>
        <!--  <div><span id="todoDesc_${this.id}" onclick="app.todoController.modifyTodo('${this.id}')">${this.description}</span></div> -->
       <div><span id="todoDesc_${this.id}">${this.description}</span></div>
        <div>
          <span onclick="app.todoController.removeTodo('${this.id}')">&times;</span>
        </div>
      </li>
    
    `;
  }
}