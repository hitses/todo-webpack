import { Todo } from "./todo.class"

export class TodoList {
  constructor() {
    this.cargarLocalStorage()
  }

  nuevoTodo(todo) {
    this.todos.push(todo)

    this.guardarLocalStorage()
  }

  pendientes() {
    const pendientes = this.todos.filter(todo => todo.completado !== true)

    return pendientes.length
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id * 1)

    this.guardarLocalStorage()
  }

  marcarCompletado(id) {
    const todo = this.todos.find(todo => todo.id === id * 1)
    todo.completado = !todo.completado

    this.guardarLocalStorage()
  }

  eliminarCompletados() {
    this.todos = this.todos.filter(todo => !todo.completado)

    this.guardarLocalStorage()
  }

  guardarLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos))
  }

  cargarLocalStorage() {
    localStorage.getItem('todo')
    ? this.todos = JSON.parse(localStorage.getItem('todo'))
    : this.todos = []

    this.todos = this.todos.map(Todo.fromJson)
  }
}