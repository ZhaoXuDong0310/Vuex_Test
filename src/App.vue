<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TodoMain :todos="todos" :deleteTodo="deleteTodo"></TodoMain>
      <TodoFooter :todos="todos" :selectAll="selectAll" :deleteSelectAll="deleteSelectAll"></TodoFooter>
    </div>
  </div>
</template>
<script>
    import Header from './components/Header.vue'
    import Main from './components/Main.vue'
    import Footer from './components/Footer.vue'
    import localStorageUtil from './utils/localStorageUtil'

    export default {

        components: {
            TodoHeader: Header,
            TodoMain: Main,
            TodoFooter: Footer
        },
        data () {
            return {
              // 从 localStorage中读取保存todos数据
                todos: localStorageUtil.readTodos()
            }
        },

        methods: {
            addTodo (todo) { // 添加todo
                this.todos.unshift(todo)
            },
            deleteTodo (index) { // 删除todo
                this.todos.splice(index, 1)
            },
            // 全选或全不选
            selectAll (check) {
                this.todos.forEach(todo => todo.completed = check)
            },
            // 删除完成的
            deleteSelectAll () {
                return this.todos = this.todos.filter(todo => !todo.completed)
            }
        },

        watch: {
          todos: {
            deep: true,
            /* handler: function (newValue) { // 保存的是最新的todos
              window.localStorage.setItem('todos_key', JSON.stringify(newValue))
            } */
            handler: localStorageUtil.saveTodos
          }
        }
    }
</script>
<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
