import axios from 'axios'
import qs from 'qs'
import defaultsDeep from 'lodash.defaultsdeep'
import loading from 'commons/utils/loading'
import { onResponseError } from './interceptors'

const getConfig = () => ({
    headers: {
        'Accept': 'application/json',
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
        const loadingId = mergedOptions.loader && loading.show()

        return axiosApi(path, mergedOptions)
            .then((resp) => {
                if (loadingId) loading.close(loadingId)
                return mergedOptions.full ? resp : resp.data
            })
            .catch((error) => {
                if (loadingId) loading.close(loadingId)
                throw error
            })
    }

    return axiosApi
}

export { getConfig }

export default base
