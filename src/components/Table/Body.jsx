import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import TableCell from '@material-ui/core/TableCell'
import { RowTableCell } from './style'

const Body = ({
    rows,
    rowNames,
    customElements,
    onEdit,
    id,
}) => (
    <TableBody>
        {rows.map((row, index) => (
            <TableRow id={`${id}-row-${index}`} style={{ borderBottom: 'none' }} key={index} hover>
                {rowNames.map((name, nindex) => (
                    <TableCell
                        key={nindex}
                        id={`${id}-cell-${nindex}`}
                        component={RowTableCell}
                        align="left">
                        {customElements(row)[name] || row[name] || ''}
                    </TableCell>
                ))}
                {onEdit && (
                    <TableCell
                        component={RowTableCell}
                        align="right">
                        <IconButton id={`${id}-row-${index}-onEdit`} onClick={() => onEdit(row)} >
                            <EditIcon size="small" color="primary" />
                        </IconButton>
                    </TableCell>
                )}
            </TableRow>
        ))}
    </TableBody>
)

Body.propTypes = {
    rows: PropTypes.array,
    rowNames: PropTypes.array,
    customElements: PropTypes.func,
    onEdit: PropTypes.func,
    id: PropTypes.string,
}

export default Body
