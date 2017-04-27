import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import user from './user'
import image from './image'
import article from './article'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    user,
    image,
    article
  }
})

export default store
