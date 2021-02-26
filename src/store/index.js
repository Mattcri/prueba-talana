import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const API = 'http://sva.talana.com:8000/api/';

export default new Vuex.Store({
  state: {
    products: [],

  },
  mutations: {
    GET_PRODUCTS (state, product) {
      state.products = product
    },

  },
  actions: {
    getProducts ({commit}) {
      return fetch(`${API}product/`)
        .then(res => {
          if (res.status === 200)
            return res.json()
        })
        .then(data => {
          commit('GET_PRODUCTS', data)
        })
    },


  },
  modules: {
  }
})
