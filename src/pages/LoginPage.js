import React, { useEffect } from 'react'
import { useAppHooks } from '../contexts'
import { getToken } from '../utils/token.utils'
import { navigate } from '@reach/router'
import { Box } from 'gestalt'
import LoginForm from '../components/forms/LoginForm'

const LoginPage = () => {
  const { useAuth } = useAppHooks()
  const [authState, dispatchAuth] = useAuth

  useEffect(() => {
    if (getToken()) {
      navigate('/')
    }
  }, [getToken])
  
  return (
    <Box>
      <LoginForm />
    </Box>
  )
}

export default LoginPage
