import { matchPath } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'

const isActive = (pathname, link) => {
    const match = matchPath(pathname, { path: link, exact: true })

    return Boolean(match)
}

const icons = {
    home: HomeIcon
}

const getIcon = (icon) => icons[icon] || 'div'

export {
    isActive,
    getIcon
}
