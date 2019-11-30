import { lazy } from 'react'
import Layout from 'containers/Main/Layout'

const HomeScreen = lazy(() => import('containers/Medic'))
const MedicAddScreen = lazy(() => import('containers/Medic/Add'))

const Login = [
    {
        path: '/',
        component: HomeScreen,
        layout: Layout,
        exact: true,
        isProtected: false,
        title: ''
    },
    {
        path: '/medics/add',
        component: MedicAddScreen,
        layout: Layout,
        exact: true,
        isProtected: false,
        title: ''
    },
    {
        path: '/medics/:id/edit',
        component: MedicAddScreen,
        layout: Layout,
        exact: true,
        isProtected: false,
        title: ''
    }
]

export default Login
