import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { removeToken } from 'commons/utils/auth'
import { UserInfo, Username, UserType } from './style'

const UserButton = ({ history }) => {
    const username = 'Sair'

    const logout = () => {
        removeToken()
        history.push('/login')
    }

    return (
        <IconButton
            edge="end"
            color="inherit"
            aria-haspopup="true"
            aria-controls="menu-principal-config"
            onClick={logout}
            style={{ borderRadius: '8%' }}>
            <AccountCircle />
            <UserInfo>
                <Hidden smDown implementation="css">
                    <Username>{username}</Username>
                    {/* <UserType>Administrador</UserType> */}
                </Hidden>
            </UserInfo>
        </IconButton>
    )
}

UserButton.propTypes = {
    t: PropTypes.func,
    history: PropTypes.object,
    showDropdown: PropTypes.func,
    history: PropTypes.any,
}

export default withRouter(UserButton)
