import styled, { css } from 'styled-components'

const ContainerStyled = styled.div`
    ${({ theme }) => { window.theme = theme }}

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Main = styled.main`
    flex-grow: 1;
    margin-bottom: 0px;
    margin-top: ${({ theme }) => theme.spacing.unit * 8}px;
    
    ${({ theme }) => css`${theme.breakpoints.up('sm')} {
        margin-left: ${({ theme }) => theme.spacing.unit * 7}px;
    }`}
`

export {
    ContainerStyled,
    Main
}
