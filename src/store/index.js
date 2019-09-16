import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import seabattle from './seabattle'

export default new Vuex.Store({
  modules: {
    seabattle,
  }
})
