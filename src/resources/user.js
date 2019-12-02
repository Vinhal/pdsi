import Api from './api/api'

const loginPath = '/api/login'

const UserApi = {
    login: (username, password) => (
        Api.post(loginPath, { username, password })
    )
}

export default UserApi
