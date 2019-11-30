import { lazy } from 'react'
// import Layout from 'containers/Main/Layout'

const LoginScreen = lazy(() => import('containers/Login'))

const Login = [
    {
        path: '/login',
        component: LoginScreen,
        // layout: Layout,
        exact: true,
        isProtected: false,
        title: ''
    }
]

export default Login
