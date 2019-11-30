import { createGlobalStyle } from 'styled-components'
import './font.css'

const globalStyle = createGlobalStyle`

    * {
        box-sizing: border-box!important;
        ::-webkit-scrollbar {
            width: ${({ theme }) => theme.spacing.unit}px;
            height: ${({ theme }) => theme.spacing.unit}px;
            opacity: 0.7;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: ${({ theme }) => theme.palette.grey.dark};
            opacity: 0.7;
        }
        ::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.3);
        }
    }
    html {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: normal;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        display: flex;

        .toast-error {
            background: #E25335;
        }
        .toast-success {
            background: #48A524;
        }

        .react-datepicker-popper {
            z-index: 9;
        }

        && {
            color: ${({ theme }) => theme.typography.color.secondary};
        }
    }

`

export { globalStyle }
