import Vue from 'vue'
import moment from 'moment'
import marked from 'marked'

import App from './App.vue'
import router from './router'
import store from '@models/index'

Object.defineProperty(Vue.prototype, '$moment', { value: moment })
Object.defineProperty(Vue.prototype, '$marked', { value: marked })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
