import React from 'react'
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
// import LogoMagalu from 'assets/svg/logo.svg'
import { sideBarSize } from 'commons/constants'
import UserButton from './UserButton'
import {
    LogoContainer,
    StyledIconButton,
    StyledAppBar,
    StyledToolbar,
    Title
} from './style'

const AppBar = ({ openSidebar, title, hasLogin }) => (
    <StyledAppBar>
        <StyledToolbar>
            <StyledIconButton disabled={!hasLogin} color="inherit" aria-label="Menu" onClick={openSidebar}>
                {hasLogin && <MenuIcon />}
            </StyledIconButton>

            {/* <LogoContainer to="/">
                <img alt="LOGO" src={LogoMagalu} style={{ width: '100%', height: '100%' }} />
            </LogoContainer> */}

            <Title variant="h6" size={sideBarSize} noWrap>
                <Hidden smDown implementation="css">
                    {title}
                </Hidden>
            </Title>

            <UserButton />
        </StyledToolbar>
    </StyledAppBar>
)

AppBar.propTypes = {
    openSidebar: PropTypes.func,
    hasLogin: PropTypes.bool.isRequired,
    title: PropTypes.string
}

export default AppBar
