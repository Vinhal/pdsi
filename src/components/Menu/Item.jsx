/* eslint-disable complexity */
import React, { memo, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link as RouteLink } from 'react-router-dom'
import { ListItemIcon, ListItemText } from '@material-ui/core'

import { isActive, getIcon } from './util'
import { ItemText, ListItem } from './style'

const Item = ({ item, showSubItems, pathname }) => {
    const { id, link, title, subItems, icon, isAdminOnly } = item

    const selected = isActive(pathname, link)
    const IconComponent = getIcon(icon)

    return (
        <Fragment key={id} >
            <ListItem
                button
                id={id}
                to={link}
                component={RouteLink}
                selected={selected}
            >
                <ListItemIcon>
                    <IconComponent className="icon" />
                </ListItemIcon>
                <ListItemText
                    primary={<ItemText className="text">{title}</ItemText>}
                />
            </ListItem>
        </Fragment>
    )
}

Item.propTypes = {
    t: PropTypes.func,
    showSubItems: PropTypes.bool,
    pathname: PropTypes.string,
    item: PropTypes.shape({
        icon: PropTypes.string,
        id: PropTypes.string,
        link: PropTypes.string,
        title: PropTypes.string,
        subItems: PropTypes.array,
        isAdminOnly: PropTypes.bool
    })
}

export default memo(Item)
