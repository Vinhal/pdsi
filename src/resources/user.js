import Api from './api/api'

const path = '/users'

const UserApi = {
    login: (username, password) => (
        Api.post(`${path}/login`, { username, password })
    )
}

export default UserApi
