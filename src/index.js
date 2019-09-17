import './js/common'
import './assets/scss/main.scss'

window.Vue = require('vue')

Vue.component('seabattle', require('./components/Seabattle.vue').default)
import store from './store'

import VueSocketIO from 'vue-socket.io'


const app = new Vue({
  el: '#app',
  store
})
