import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from '../components'

function PrivateRoute({ children }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" replace={true} />
  }

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
}
