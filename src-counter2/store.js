import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex管理的状态对象
const state = {
  count: 0
}

// 包含多个get计算属性函数的对象
const getters = {
  eventOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

// mutations - 包含多个更新state函数的对象
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

// actions - 包含多个对应的事件回调函数的对象
//         - 通过执行 commit()来触发 mutation 的调用，间接更新 state
//         - 组件中通过 this.$store.dispatch('action名称')来执行
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },
  decrement ({commit, state}) {
    if (state.count > 0) {
      commit('DECREMENT')
    }
  },
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync ({commit}) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 1000)
  }
}

export default new Vuex.Store({
  state, // 状态
  getters, // 包含多个get计算属性函数的对象
  mutations, // 包含多个直接更新state函数的对象
  actions // 包含多个对应的事件回调函数的对象
})
