import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import 'commons/i18n'
import 'react-toastify/dist/ReactToastify.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { globalStyle as GlobalStyle } from 'commons/styles/global'
import theme from 'commons/styles/theme'
import Main from 'containers/Main'

const App = () => (
    <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
            <Fragment>
                <CssBaseline />
                <GlobalStyle />
                <BrowserRouter>
                    <Main/>
                </BrowserRouter>
            </Fragment>
        </ThemeProvider>
    </MuiThemeProvider>
)

export default App

