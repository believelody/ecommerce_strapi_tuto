import React, { useEffect } from 'react'
import { Container } from 'gestalt'
import RegisterForm from '../components/forms/RegisterForm'
import { useAppHooks } from '../contexts'
import { navigate } from '@reach/router'
import { getToken } from '../utils/token.utils'

const RegisterPage = () => {
  const { useAuth } = useAppHooks()
  const [authState, dispatchAuth] = useAuth

  useEffect(() => {
    if (getToken()) {
      navigate('/')
    }
  }, [getToken])

  return (
    <Container>
      <RegisterForm />
    </Container>
  )
}

export default RegisterPage
