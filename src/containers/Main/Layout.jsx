import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ContainerStyled, Main } from './style'
import AppBar from 'components/AppBar'
import Sidebar from 'components/Sidebar'

const Layout = ({ children, title }) => {
    const [openSidebar, setOpenSidebar] = useState(false)

    return (
        <ContainerStyled>
            <AppBar />
            <Sidebar
                open={openSidebar}
                onClose={() => setOpenSidebar(false)}
                onOpen={() => setOpenSidebar(true)}
            />
            <Main open>
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

