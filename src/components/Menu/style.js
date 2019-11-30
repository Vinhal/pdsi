import styled from 'styled-components'
import MUIListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

const getMargin = (theme) => theme.spacing.unit

const Container = styled.div`
    z-index: 9;
    position: relative;
    height: 100%;
    width: ${({ size }) => size}px;
`

const ItemText = styled(Typography)`
    && {
        font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
        font-size: ${({ theme }) => theme.typography.fontSize}px;
    }
`

const SubItemText = styled(Typography)`
    && {
        color: ${({ theme }) => theme.palette.grey.normal};
        padding-left: ${({ theme }) => getMargin(theme) * 9}px;
        padding-right: 0px;
        font-size: ${({ theme }) => theme.typography.fontSize - 2}px;
    }
`

const MenuSpacer = styled.div`
    ${({ theme }) => theme.mixins.toolbar}
`

const MenuItems = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
`

const ListItem = styled(MUIListItem).attrs({ classes: { selected: 'item-selected' } })`
    &&:hover { 
        background-color: rgba(0, 0, 0, 0.05);
    }

    &.item-selected {
        && {
            background-color: unset;
        }
        &&:hover { 
            background-color: rgba(0, 0, 0, 0.05);
        }
        .icon {
            fill: ${({ theme }) => theme.palette.primary.main};
        }
        .text {
            color: ${({ theme }) => theme.palette.primary.main};
        }   
    }
`

export {
    MenuSpacer,
    Container,
    MenuItems,
    ItemText,
    SubItemText,
    ListItem
}
