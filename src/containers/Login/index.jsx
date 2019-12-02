import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import { setToken } from 'commons/utils/auth'
import userApi from 'resources/user'
import Input from 'components/Input'
import Logo from 'assets/images/pocket-logo.png'
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
        userApi.login(info.login, info.password).then(({ token }) => {
            setToken(token)
            history.push('/')
        })
    }

    return (
        <Main>
            <Container>
                <ActivityBar />
                <AuthContainer>
                    <img src={Logo} alt="Logo" style={{ marginTop: '10px', width: '18%' }} />
                    <Tabs value={0} indicatorColor="secondary" textColor="secondary">
                        <Tab label="Login" />
                        <Tab label="Registrar" />
                    </Tabs>
                    <div style={{ marginTop: '20px', width: '80%' }}>
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
                        <StyledButton
                            variant="contained"
                            color="secondary"
                            onClick={auth}
                        >
                            Acessar
                        </StyledButton>
                        <StyledText>
                            Esqueci a senha
                        </StyledText>
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
