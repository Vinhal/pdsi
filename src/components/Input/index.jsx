import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const Input = ({ name, label, value, onChange, margin, variant, ...props }) => (
    <TextField
        id={name}
        label={label}
        value={value}
        margin={margin}
        variant={variant}
        style={{ width: '100%' }}
        InputLabelProps={{ shrink: true }}
        onChange={(ev) => onChange(ev.target.value)}
        {...props}
    />
)

Input.propTypes = {
    name: PropTypes.any,
    label: PropTypes.any,
    value: PropTypes.any,
    variant: PropTypes.string,
    margin: PropTypes.string,
    onChange: PropTypes.func,
}

Input.defaultProps = {
    variant: 'outlined',
    margin: 'normal',
}

export default Input
