import styled, { css } from 'styled-components'
import { Table, TableCell } from '@material-ui/core'

const StyledTable = styled(Table)`
    && {
        min-width: 1020;
    }
`

const HeaderTableCell = styled(TableCell)`
    && {
        color: rgba(0, 0, 0, 0.5);
        line-height: 16px;
        font-weight: normal;
    }
`

const RowTableCell = styled(TableCell)`
    && {
        color: ${({ theme }) => theme.palette.common.black};
        font-weight: normal;
        border: none;
    }
`

const Wrapper = styled.div`
    overflow-x: auto;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.unit * 3}px;

    ${({ noMargin }) => noMargin && css`
        margin: 0;
    `}
`

export {
    StyledTable,
    HeaderTableCell,
    RowTableCell,
    Wrapper
}
