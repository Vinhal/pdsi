import base from './base'

const baseUrl = process.env.REACT_APP_API_URL

const baseApi = base(baseUrl)

const Api = {
    request(path, options) {
        return baseApi.request(path, options)
    },

    get(path, params) {
        return baseApi.request(path, { params })
    },

    post(path, data) {
        return baseApi.request(path, { data, method: 'POST' })
    },

    update(path, data) {
        return Api.request(path, { data, method: 'PUT' })
    },

    delete(path) {
        return Api.request(path, { method: 'DELETE' })
    },
}

export { baseUrl }

export default Api
