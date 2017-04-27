import api from '@api'
import router from '@root/router'

const urls = {
  list: '/articles/',
  detail: id => `/articles/${id}/`
}

const initialState = {
  list: {
    count: 0,
    previous: null,
    next: null
  },
  detail: {},
  errors: null
}

const mutations = {
  receiveList(state, data) {
    state.list = data
  },
  receiveDetail(state, data) {
    state.detail = data
  },
  receiveErrors(state, data) {
    state.errors = data
  }
}

const actions = {
  create(context, {data, redirect}) {
    api.post(urls.list, data).then(resp => {
      context.commit('receiveDetail', resp.data)
      if(redirect === true) {
        router.push({name: 'article-detail-page', params: {id: resp.data.id}})
      }
    }).catch(err => {
      console.log(err)
      context.commit('receiveErrors', err.response.data)
    })
  },
  getList(context, params={}) {
    api.get(urls.list, {params}).then(resp => {
      context.commit('receiveList', resp.data)
    }).catch(err => {
      console.log(err)
    })
  },
  getDetail(context, id) {
    api.get(urls.detail(id)).then(resp => {
      context.commit('receiveDetail', resp.data)
    }).catch(err => {
      console.log(err)
    })
  },
  getPreviousPage(context, params={}) {
    if(context.state.list.previous) {
      api.get(context.state.list.previous, {params}).then(resp => {
        context.commit('receiveList', resp.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  getNextPage(context, params={}) {
    if(context.state.list.next) {
      api.get(context.state.list.next).then(resp => {
        context.commit('receiveList', resp.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

const getters = {
  list: state => state.list,
  detail: state => state.detail,
  errors: state => state.errors
}

const article = {
  state: initialState,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default article
