import React from 'react'
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { UserInfo, Username, UserType } from './style'

const UserButton = () => {
    const username = 'User'

    return (
        <IconButton
            edge="end"
            color="inherit"
            aria-haspopup="true"
            aria-controls="menu-principal-config"
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
    showDropdown: PropTypes.func
}

export default UserButton
