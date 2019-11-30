import React from 'react'
import TextField from '@material-ui/core/TextField'

const Activity = ({ name, label, ...props }) => (
    <TextField
        id={name}
        label={label}
        margin="normal"
        style={{ width: '80%' }}
        variant="outlined"
        InputLabelProps={{
            shrink: true,
        }}
        {...props}
    />
)

export default Activity
