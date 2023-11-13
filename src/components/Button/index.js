import PropTypes from 'prop-types'
import React from 'react'

import { ContainterButton } from './syles'

function Button({ children, ...rest }) {
  return <ContainterButton {...rest}>{children}</ContainterButton>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}
