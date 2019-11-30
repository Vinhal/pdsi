import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import Input from 'components/Input'
import Logo from 'assets/images/logo.jpeg'
import {
    Main,
    AuthContainer,
    StyledButton,
    StyledText,
    Container,
    ActivityBar,
} from './style'

const Login = ({ history }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [info, setInfo] = useState({ login: '', password: '' })

    const auth = () => {
        history.push('/')
    }

    return (
        <Main>
            <Container>
                <ActivityBar />
                <AuthContainer>
                    {/* <img src={Logo} alt="Logo" style={{ marginTop: '30px' }} /> */}
                    <Tabs value={0} indicatorColor="primary" textColor="primary" style={{ marginTop: '20px' }}>
                        <Tab label="Login" />
                        <Tab label="Registrar" />
                    </Tabs>
                    <div style={{ marginTop: '45px' }}>
                        <Input
                            name="login-input"
                            label="Login"
                            value={info.login}
                            onChange={(login) => setInfo((init) => ({ ...init, login }))}
                        />
                        <Input
                            label="Senha"
                            name="password-input"
                            type={showPassword ? 'text' : 'password'}
                            value={info.password}
                            onChange={(password) => setInfo((init) => ({ ...init, password }))}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end" onClick={() => setShowPassword((init) => !init)} >
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <StyledText>
                            Esqueci a senha
                        </StyledText>
                        <StyledButton variant="contained" color="primary" onClick={auth} >
                            Acessar
                        </StyledButton>
                    </div>
                </AuthContainer>
            </Container>
        </Main>
    )
}

Login.propTypes = {
    history: PropTypes.object,
}

export default Login
