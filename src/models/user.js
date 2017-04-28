import api from '@api'

const urls = {
  list: '/users/',
  detail: id => `/users/${id}/`,
  feed: id => `/users/${id}/feed/`
}

const initialState = {
  list: {},
  detail: {
    id: null,
    permissions: {
      read: false,
      write: false
    }
  },
  feed: {
    count: 0,
    next: null,
    previous: null,
    results: []
  }
}

const mutations = {
  receiveList(state, data) {
    state.list = data
  },
  receiveDetail(state, data) {
    state.detail = data
  },
  receiveFeed(state, data) {
    state.feed = data
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
  getFeed(context, id, params={}) {
    api.get(urls.feed(id), {params}).then(resp => {
      context.commit('receiveFeed', resp.data)
    }).catch(err => {
      console.log(err)
    })
  },
  getFeedPreviousPage(context, params={}) {
    if (context.state.feed.previous !== null) {
      api.get(context.state.feed.previous).then(resp => {
        context.commit('receiveFeed', resp.data)
      }).catch(err => console.log(err))
    }
  },
  getFeedNextPage(context, params={}) {
    if (context.state.feed.next !== null) {
      api.get(context.state.feed.next).then(resp => {
        context.commit('receiveFeed', resp.data)
      }).catch(err => console.log(err))
    }
  },
  updateDetail(context, data) {
    api.put(urls.detail(data.id), data).then(resp => {
      context.commit('receiveDetail', resp.data)
    }).catch(err => {
      console.log(err)
    })
  }
}

const getters = {
  list: state => state.list,
  detail: state => state.detail,
  feed: state => state.feed
}

const user = {
  state: initialState,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default user
