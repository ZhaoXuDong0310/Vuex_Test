import Vue from 'vue'
import App from './App.vue'

import './base.css'

/* eslint-disable no-new */
// 创建Vue的实例对象并且将外部组件映射成组件标签
new Vue({
  el: '#app',
  components: { // 映射成为组件标签
    App
  },
  template: '<App/>' // 使用组件标签
})
