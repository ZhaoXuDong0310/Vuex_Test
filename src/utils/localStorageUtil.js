/*
  管理数据存储功能的工具模块
 */

const TODOS_KEY = 'todos_key'

export default {
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  },

  saveTodos (todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}
