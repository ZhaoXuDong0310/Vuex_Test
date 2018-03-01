import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex管理的状态对象,唯一的
const state = { // 初始化状态显示
  count: 0
}

// 包含多个get计算属性函数的对象
const getters = {
  eventOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

// 包含多个直接更新state的方法(回调函数)的对象
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

// 包含多个事件回调函数的对象,通过执行: commit()来触发mutation的调用, 间接更新state
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },
  decrement ({commit, state}) {
    if (state.count > 0) {
      commit('DECREMENT', state)
    }
  },
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT', state)
    }
  },
  incrementAsync ({commit, state}) {
    setTimeout(() => {
      commit('INCREMENT', state)
    }, 1000)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
