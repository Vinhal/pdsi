import React from 'react'
import TextField from '@material-ui/core/TextField'

const Input = ({ name, label, value, onChange, ...props }) => (
    <TextField
        id={name}
        label={label}
        value={value}
        margin="normal"
        style={{ width: '80%' }}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        onChange={(ev) => onChange(ev.target.value)}
        {...props}
    />
)

export default Input
