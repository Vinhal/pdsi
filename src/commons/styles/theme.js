import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0086FF',
            baby: '#2ECEFF'
        },
        secondary: {
            main: '#1599fa',
            light: '#0076B3',
            dark: '#094978',
            normal: '#0083CA'
        },
        error: {
            main: '#E25335'
        },
        grey: {
            main: '#E5E5E5',
            secondary: '#4F4F4F',
            light: '#F4F4F4',
            dark: '#8C8C8C',
            normal: 'rgba(0, 0, 0, 0.6)'
        },
        green: {
            main: '#59C00B',
            light: '#72F772',
            dark: '#378E16',
            normal: '#48A524'
        },
        yellow: {
            main: '#FFFF4A'
        },
        orange: {
            main: '#FFC112'
        },
        red: {
            main: '#FF5F5F',
            normal: '#DC4E41'
        },
        pink: {
            main: '#FF7AE7'
        },
        purple: {
            main: '#C739FF'
        }
    },
    typography: {
        useNextVariants: true,
        color: {
            primary: '#0083CA',
            secondary: '#404040',
            text: 'rgba(0, 0, 0, 0.8)'
        }
    }
})

export default theme
