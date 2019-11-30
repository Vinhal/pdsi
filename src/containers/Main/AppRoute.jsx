import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Loading from 'components/Loading'

const AppRoute = ({ component: Component, layout: Layout = 'div', title, isProtected, ...otherProps }) => (
    <Route {...otherProps} render={(props) => (
        <Layout title={title}>
            <Suspense fallback={<Loading />}>
                <Component {...props} />
            </Suspense>
        </Layout>
    )} />
)

AppRoute.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any,
    title: PropTypes.string
}

export default AppRoute
