import React from 'react'
import PropTypes from 'prop-types'
import Menu from 'components/Menu'
import { StyledDrawer } from './style'

const Sidebar = ({ open, onOpen, onClose }) => (
    <StyledDrawer
        open={open}
        onClose={onClose}
        onClick={onClose}
        variant="permanent"
        onMouseOver={onOpen}
        onMouseLeave={onClose}
        classes={{ paper: 'paper' }}
    >
        <Menu showSubItems={open} />
    </StyledDrawer>
)

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}
export default Sidebar
