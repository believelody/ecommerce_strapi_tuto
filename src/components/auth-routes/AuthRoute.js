import React from 'react'
import { useAppHooks } from '../../contexts'
import { Redirect } from '@reach/router'
import { getToken } from '../../utils/token.utils'

const AuthRoute = ({ component: Component, path }) => {
    // const { useAuth } = useAppHooks()
    // const [{isConnected}, dispatchAuth] = useAuth

  return (
    getToken() ?
    <Component path={path} /> :
    <Redirect to='/login' />
  )
}

export default AuthRoute
