import React from 'react'
import { Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AppRoute from './AppRoute'
import { ContainerStyled } from './style'
import routes from 'routes'

const Main = () => (
    <ContainerStyled>
        <Switch>
            {routes.map((route) => (
                <AppRoute
                    key={route.path}
                    {...route}
                />
            ))}
        </Switch>
        <ToastContainer position="bottom-right" />
    </ContainerStyled>
)

export default Main
