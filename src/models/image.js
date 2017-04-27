import api from '@api'

const urls = {
  list: '/images/',
  detail: id => `/images/${id}/`
}

const initialState = {
  list: {
    count: 0,
    previous: null,
    next: null,
    results: []
  },
  detail: {},
  created: {},
  uploadError: {}
}

const mutations = {
  receiveList(state, data) {
    state.list = data
  },
  receiveDetail(state, data) {
    state.detail = data
  },
  receiveUploadError(state, data) {
    state.uploadError = data
  },
  receiveCreated(state, data) {
    state.created = data
  }
}

const actions = {
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
  previousPage(context, params={}) {
    if(context.state.list.previous) {
      api.get(context.state.list.previous, {params}).then(resp => {
        context.commit('receiveList', resp.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  nextPage(context, params={}) {
    if(context.state.list.next) {
      api.get(context.state.list.next, {params}).then(resp => {
        context.commit('receiveList', resp.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  createNew(context, data) {
    api.post(urls.list, data).then(resp => {
      context.commit('receiveCreated', resp.data)
    }).catch(err => {
      console.log(err)
      context.commit('receiveUploadError', err.response.data)
    })
  }
}

const getters = {
  list: state => state.list,
  detail: state => state.detail,
  uploadError: state => state.uploadError,
  created: state => state.created
}

const image = {
  state: initialState,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default image
