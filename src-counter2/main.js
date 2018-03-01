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
  store // 映射store：所有用vuex管理的组件中都多了一个属性$store, 它就是一个store对象
})
