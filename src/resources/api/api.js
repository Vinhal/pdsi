import base from './base'

const baseUrl = process.env.REACT_APP_API_URL

const baseApi = base(baseUrl)

const Api = {
    request(path, options) {
        return baseApi.request(path, options)
    }
}

export { baseUrl }

export default Api
