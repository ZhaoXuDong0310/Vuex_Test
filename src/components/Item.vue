<template>
  <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" style="display:none" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>
<script>
    export default {
        props: {
            todo: Object,
            index: Number,
            deleteTodo: Function
        },
        data () {
            return {
                bgColor: '#fff',
                isShow: false
            }
        },
        methods: {
            handleEnter (isEnter) {
                if (isEnter) { // 进入
                    this.bgColor = '#ddd'
                    this.isShow = true
                } else { // 离开
                  this.bgColor = '#fff'
                  this.isShow = false
                }
            },
            deleteItem () {
                const {todo, index, deleteTodo} = this
                if (window.confirm(`确定删除${todo.title}吗？`)) {
                    deleteTodo(index)
                }
            }
        }
    }
</script>
<style>

</style>
