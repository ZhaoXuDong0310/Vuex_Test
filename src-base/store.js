/*
  vue的核心管理对象模块：store
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 声明使用Vuex

// vuex管理的状态对象，它应该是唯一的
const state = { // 初始化状态
  count: 0
}

// 包含多个更新state函数的对象
const mutations = {
  // 增加的mutation
  INCREMENT (state) {
    state.count++
  },
  // 减少的mutation
  DECREMENT (state) {
    state.count--
  }
}

// 包含多个对应事件回调函数的对象
const actions = {
  // 增加的action
  increment ({commit}) {
    // 提交增加的mutation
    commit('INCREMENT')
  },

  // 减少的action
  decrement ({commit, state}) {
    if (state.count > 0) {
      // 提交减少的mutation
      commit('DECREMENT', state)
    }
  },

  // 带条件的action
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
        commit('INCREMENT', state)
    }
  },

  // 异步的action
  incrementAsync ({commit}) {
    // 在action里面，直接就可以执行异步代码
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

// 包含多个get计算属性函数的对象
const getters = {
  eventOrOdd (state) { // 不需要调用，只需要读取属性值
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({ // 向外暴露store对象
  state, // 状态
  mutations, // 包含多个更新state函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters // 包含多个get计算属性函数的对象

})
