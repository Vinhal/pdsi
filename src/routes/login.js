import { lazy } from 'react'

const LoginScreen = lazy(() => import('containers/Login'))

const Login = [
    {
        path: '/login',
        component: LoginScreen,
        exact: true,
        isProtected: false,
        title: ''
    }
]

export default Login
