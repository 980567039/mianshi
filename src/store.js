import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// vuex状态持久化
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'aaaa'
  },
  mutations: {
    setTT(state, val) {
      state.test = val
    }
  },
}

const moduleB = {
  state: {
    name: 'bbbb'
  },
  mutations: {
    setTT(state, val) {
      state.test = val
    }
  },
}

const store = new Vuex.Store({
  state: {
    // vuex 基本数据
    test: 'test'
  },
  getters: {
    // vuex的计算属性  对基本数据计算后返回
    getTest: (state) => (id) => {
      return state.test + id
    }
  },
  mutations: {
    // vue事件 必须是同步类型
    setTest(state, val) {
      state.test = val
    }
  },
  actions: {
    async actionA({ commit }) {
      await axios.get('frontendTest.json').then(res => {
        console.log(res)
        commit('setTest', 'hehehe')
      })
      console.log(this.state.test)
    }
  },
  modules: {
    ma: moduleA, 
    mb: moduleB
  },
  plugins: [createPersistedState()]
});

console.log(store.state.ma)
console.log(store.state.mb)

export default store

