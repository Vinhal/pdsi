import { lazy } from 'react'
import Layout from 'containers/Main/Layout'

const HomeScreen = lazy(() => import('containers/Home'))

const Login = [
    {
        path: '/',
        component: HomeScreen,
        layout: Layout,
        exact: true,
        isProtected: false,
        title: ''
    }
]

export default Login
