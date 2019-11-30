import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TablePagination from '@material-ui/core/TablePagination'
import Head from './Head'
import Body from './Body'
import {
    StyledTable,
    Wrapper
} from './style'

const Table = ({
    id, count,
    rows, page,
    headers,
    customElements,
    onEdit, rowNames,
    rowsPerPage, hasPagination,
    onChangePage, onChangeRowsPerPage,
}) => {
    const handleChangePage = (_, page) => onChangePage(page)
    const handleChangeRowsPerPage = (event) => onChangeRowsPerPage(event.target.value)
    const labelDisplayedRows = ({ from, to }) => `${from}-${to}`

    return (
        <Fragment>
            <Wrapper>
                <StyledTable id={id}>
                    <Head
                        id={id}
                        headers={headers}
                        rowNames={rowNames}
                        hasOptions={Boolean(onEdit)}
                    />
                    <Body
                        id={id}
                        rows={rows}
                        onEdit={onEdit}
                        rowNames={rowNames}
                        customElements={customElements}
                    />
                </StyledTable>
            </Wrapper>
            {hasPagination && <TablePagination
                page={page}
                component="div"
                id={`${id}-pagination`}
                rowsPerPage={rowsPerPage}
                count={count}
                onChangePage={handleChangePage}
                labelDisplayedRows={labelDisplayedRows}
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                labelRowsPerPage={"Linhas por Página"}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />}
        </Fragment>
    )
}

Table.propTypes = {
    id: PropTypes.string.isRequired,
    headers: PropTypes.array,
    rows: PropTypes.array,
    rowNames: PropTypes.array,
    page: PropTypes.number,
    dataSize: PropTypes.number,
    rowsPerPage: PropTypes.number,
    onEdit: PropTypes.func,
    onChangePage: PropTypes.func,
    customElements: PropTypes.func,
    onChangeRowsPerPage: PropTypes.func,
    hasPagination: PropTypes.bool
}

Table.defaultProps = {
    headers: [],
    rows: [],
    rowNames: [],
    page: 0,
    rowsPerPage: 10,
    hasPagination: true,
    customElements: () => ({})
}

export default React.memo(Table)
