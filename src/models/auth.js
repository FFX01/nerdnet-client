import api from '@api'

const urls = {
  login: '/rest-auth/login/',
  logout: '/rest-auth/logout/',
  user: '/rest-auth/user/'
}

const initialState = {
  loggedIn: false,
  authUser: {
    pk: null
  }
}

const mutations = {
  receivedLoggedIn(state, data) {
    state.loggedIn = data
  },
  receiveAuthUser(state, data) {
    state.authUser = data
  }
}

const actions = {
  login(context, {username, password}) {
    api.post(urls.login, {username, password}).then(resp => {
      window.sessionStorage.setItem('token', resp.data.key)
      context.commit('receivedLoggedIn', true)
      context.dispatch('getAuthUser')
    }).catch(err => {
      console.log(err)
      window.sessionStorage.removeItem('token')
      context.commit('receivedLoggedIn', false)
    })
  },
  logout(context) {
    api.post(urls.logout).then(resp => {
      window.sessionStorage.removeItem('token')
      context.commit('receivedLoggedIn', false)
    }).catch(err => {
      console.log(err)
    })
  },
  getAuthUser(context) {
    api.get(urls.user).then(resp => {
      context.commit('receiveAuthUser', resp.data)
    }).catch(err => {
      console.log(err)
    })
  }
}

const getters = {
  loggedIn: state => state.loggedIn,
  authUser: state => state.authUser
}

const auth = {
  state: initialState,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default auth
