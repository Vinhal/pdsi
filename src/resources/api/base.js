import axios from 'axios'
import qs from 'qs'
import defaultsDeep from 'lodash.defaultsdeep'
import { getToken } from 'commons/utils/auth'

const getConfig = () => ({
    headers: {
        'Accept': 'application/json',
        'x-access-token': getToken(),
    },
    loader: true,
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
})

const base = (baseURL, config = {}) => {
    const axiosApi = axios.create({
        mode: 'cors',
        baseURL,
        ...config
    })

    axiosApi.request = (path, options) => {
        const mergedOptions = defaultsDeep(options, getConfig())

        return axiosApi(path, mergedOptions)
            .then((resp) => resp.data)
            .catch((error) => {
                throw error
            })
    }

    return axiosApi
}

export { getConfig }

export default base
