import React from 'react'
import { Redirect } from '@reach/router'
import { getToken } from '../../utils/token.utils'

const AuthRoute = ({ component: Component, path }) => {
  return (
    getToken() ?
    <Component path={path} /> :
    <Redirect to='/login' />
  )
}

export default AuthRoute
