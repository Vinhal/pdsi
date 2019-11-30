import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ContainerStyled, Main } from './style'

const Layout = ({ children, title }) => {
    return (
        <ContainerStyled>
            <Main open={openSidebar}>
                {children}
            </Main>
        </ContainerStyled>
    )
}

Layout.propTypes = {
    children: PropTypes.object,
    title: PropTypes.string
}
export default Layout

