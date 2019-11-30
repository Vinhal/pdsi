import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import bgImage from 'assets/images/login-img.jpeg'

const Main = styled.div`
    background: #e5e9ea;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    background: #e5e9ea;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ActivityBar = styled(Paper)`
    && {
        height: 70vh;
        width: 20%;
        text-align: center;
        z-index: 9;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(${bgImage});
        box-shadow: 0px 1px 45px 3px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    }
`

const AuthContainer = styled(Paper)`
    && {
        height: 65vh;
        width: 40%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 1px 35px 3px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    }

`

const StyledTitle = styled(Typography)`
    margin: 0;
    margin-bottom: 10px;
`

const StyledSubtitle = styled(Typography)`
    font-style: italic;
    font-weight: 400;
    margin: 0;
`

const StyledButton = styled(Button)`
    && {
        margin-top: 35px;
        border-radius: 5px;
        width: 80%;
    }
`

const StyledText = styled(Typography)`
    padding-top: 8px;
    font-style: italic;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.secondary.main};
`

export {
    Main,
    Container,
    ActivityBar,
    AuthContainer,
    StyledTitle,
    StyledSubtitle,
    StyledButton,
    StyledText
}
