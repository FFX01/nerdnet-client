import api from '@api'


class Model {
    constructor(name, endpoint) {
        this.conf = {
            name: name,
            endpoint: endpoint
        }
        this.data = {
            detail: {},
            list: [],
            meta: {
                count: null,
                next: null,
                previous: null
            }
        }
        this.error = null

        this.state = this.state.bind(this)
    }
    state() {
        return this.data
    }
    getDetail(id) {
        api.get(this.detailUrl(id)).then(resp => {
            this.data.detail = resp.data
            this.error = null
        }).catch(err => {
            console.log(err)
            this.error = err
        })
    }
    getList(params={}) {
        api.get(this.conf.endpoint, {params}).then(resp => {
            this.data.meta = {
                count: resp.data.count,
                next: resp.data.next,
                previous: resp.data.previous
            }
            this.data.list = resp.data.results
            this.error = null
        }).catch(err => {
            console.log(err)
            this.error = err
        })
    }
    previousPage() {
        api.get(this.data.meta.previous).then(resp => {
            this.data.meta = {
                count: resp.data.count,
                next: resp.data.next,
                previous: resp.data.previous
            }
            this.data.list = resp.data.results
            this.err = null
        }).catch(err => {
            console.log(err)
            this.error = err
        })
    }
    nextPage() {
        api.get(this.data.meta.next).then(resp => {
            this.data.meta = {
                count: resp.data.count,
                next: resp.data.next,
                previous: resp.data.previous
            }
            this.data.list = resp.data.results
            this.err = null
        }).catch(err => {
            console.log(err)
            this.error = err
        })
    }
    detailUrl(id) {
        return `${this.conf.endpoint}/${id}/`
    }
    get(key) {
        return this.data[key]
    }
}

export default Model