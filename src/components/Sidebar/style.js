import styled, { css } from 'styled-components'
import MuiDrawer from '@material-ui/core/Drawer'
import { sideBarSize } from 'commons/constants'

const StyledDrawer = styled(MuiDrawer)`
    && .paper {
        overflow-x: hidden;
        white-space: nowrap;
        width: ${({ theme, open }) => (open ? sideBarSize : theme.spacing.unit * 7)}px;
        
        ${({ theme }) => css`${theme.breakpoints.down('xs')} {
            width: ${({ open }) => (open ? sideBarSize : 0)}px;
        }`}

        transition: ${({ theme }) => theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen + 180
    })};
    }
`

export { StyledDrawer }
