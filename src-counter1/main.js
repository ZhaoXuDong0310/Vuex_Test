/*
  入口JS：创建Vue的实例对象
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store
})
