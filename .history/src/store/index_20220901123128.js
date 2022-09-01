import Vue from 'vue'
import Vuex from 'vuex'
import modelData from './modelData'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading:false,
  },
  getters: {
  },
  mutations: {
    loading(state){
      state.isLoading = !state.isLoading;
    }
  },
  actions: {
  },
  modules: {
    modelData
  }
})
