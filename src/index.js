import './styles.css'

import {Todo, TodoList} from './classes'
import { crearTodoHtml, todosPendientes } from './js/components'

export const todoList = new TodoList()

todoList.todos.forEach(crearTodoHtml)
todosPendientes()