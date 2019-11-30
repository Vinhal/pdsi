import React from 'react'
import PropTypes from 'prop-types'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { HeaderTableCell } from './style'

const Head = ({
    id,
    headers,
    hasOptions,
    rowNames,
}) => (
    <TableHead>
        <TableRow id={`${id}-header`}>
            {headers.map((row, index) => (
                <TableCell
                    key={index}
                    id={`${id}-header-${index}`}
                    align="left"
                    name={rowNames[index]}
                    component={HeaderTableCell}
                >
                    {row}
                </TableCell>
            ))}
            {hasOptions && (
                <TableCell
                    align="left"
                />
            )}
        </TableRow>
    </TableHead>
)

Head.propTypes = {
    rowNames: PropTypes.array,
    headers: PropTypes.array,
    hasOptions: PropTypes.bool,
    id: PropTypes.string,
}

export default Head
