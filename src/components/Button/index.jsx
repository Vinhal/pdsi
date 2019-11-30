import React from 'react'
import PropTypes from 'prop-types'
import ButtonMUI from '@material-ui/core/Button'

const Button = ({ id, label, onClick, color, variant, ...props }) => (
    <ButtonMUI
        id={id}
        color={color}
        variant={variant}
        onClick={onClick}
        {...props}
    >
        {label}
    </ButtonMUI>
)

Button.propTypes = {
    id: PropTypes.any,
    label: PropTypes.any,
    color: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.string,
}

Button.defaultProps = {
    variant: 'contained',
    color: 'secondary',
}

export default Button
