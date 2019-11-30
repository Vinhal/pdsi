import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { List, ListItem } from '@material-ui/core'
import { sideBarSize } from 'commons/constants'
import menu from 'assets/menu'

import Item from './Item'
import { Container, MenuSpacer, MenuItems } from './style'

const Menu = ({ showSubItems, location }) => (
    <Container size={sideBarSize}>
        <MenuItems>
            <List dense={false}>
                <ListItem disableGutters>
                    <MenuSpacer />
                </ListItem>
                {menu.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        showSubItems={showSubItems}
                        pathname={location.pathname}
                    />
                ))}
            </List>
        </MenuItems>
    </Container>
)

Menu.propTypes = {
    showSubItems: PropTypes.bool,
    location: PropTypes.object
}

export default withRouter(memo(Menu))
