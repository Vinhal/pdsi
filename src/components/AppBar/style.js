import styled, { css } from 'styled-components'
import { IconButton, AppBar, Typography, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

const StyledAppBar = styled(AppBar)`
    && {
        z-index: ${({ theme }) => theme.zIndex.drawer + 1};
        flex-direction: row;
        background: ${({ theme }) => `linear-gradient(106.31deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.baby} 158.83%)`};
        box-shadow: none;
    }
`
const Title = styled(Typography)`
    && {
        color: ${({ theme }) => theme.palette.common.white};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-weight: bold;
        flex-grow: 1;
    }
`

const StyledToolbar = styled(Toolbar)`
    && {
        align-self: center;
        flex: 1;
        align-items: center;
        padding: 0px;
        margin-right: ${({ theme }) => theme.spacing.unit * 5}px;
    
        ${({ theme }) => css`${theme.breakpoints.down('xs')} {
            margin-right: ${({ theme }) => theme.spacing.unit * 5}px;
        }`}
    }
`
const StyledIconButton = styled(IconButton)`
    && {
        width: ${({ theme }) => theme.spacing.unit * 7}px;
    }
`

const LogoContainer = styled(Link)`
    margin: auto;
    width: 150px;
    height: 100%;
    margin-left: ${({ theme }) => theme.spacing.unit * 7}px;

    ${({ theme }) => css`${theme.breakpoints.down('xs')} {
        margin-left: ${({ theme }) => theme.spacing.unit}px;
    }`}
    
    ${({ theme }) => theme.breakpoints.up('md')}{
        margin-right: ${({ theme }) => theme.spacing.unit * 8}px;
        width: 250px;
    }
`

const UserInfo = styled.div`
    text-align: start;
    margin-left: ${({ theme }) => theme.spacing.unit}px;
`

const Username = styled(Typography)`
    && {
        color: ${({ theme }) => theme.palette.common.white};
        line-weight: ${({ theme }) => theme.spacing.unit * 2}px;
    }
`

const UserType = styled(Typography)`
    && {
        color: ${({ theme }) => theme.palette.grey.main};
        font-size: ${({ theme }) => theme.typography.fontSize - 2}px;
        line-weight: ${({ theme }) => theme.spacing.unit * 2}px;
    }
`

export {
    StyledToolbar,
    LogoContainer,
    StyledIconButton,
    StyledAppBar,
    Title,
    UserInfo,
    Username,
    UserType
}
