import React from 'react'
import { Redirect } from '@reach/router'
import { getToken } from '../../utils/token.utils'

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    getToken() ?
    <Component {...rest} /> :
    <Redirect to='/login' />
  )
}

export default AuthRoute
