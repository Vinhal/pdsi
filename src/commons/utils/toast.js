import { toast } from 'react-toastify'

const defaultOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 8000
}

const getOptions = (options) => ({ ...defaultOptions, ...options })

const success = (message, options = defaultOptions) => toast.success(message, { ...options, className: 'toast-success' })

const error = (message, opts) => {
    const options = getOptions(opts)
    const { toastId } = options

    return !toast.isActive(toastId) && toast.error(message, { ...options, className: 'toast-error' })
}

const warn = (message, options = defaultOptions) => toast.warn(message, options)
const info = (message, options = defaultOptions) => toast.info(message, options)
const defaultToast = (message, options = defaultOptions) => toast(message, options)

export default {
    success,
    error,
    warn,
    info,
    default: defaultToast
}

