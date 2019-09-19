import React, { useEffect } from 'react'
import { Router, navigate } from '@reach/router'
import styled from 'styled-components'
import { Container, Spinner, Box } from 'gestalt'

import { useAppHooks } from './contexts'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './components/navbar/Navbar'
import Loader from './components/loader/Loader'
import BrewDetailPage from './pages/BrewDetailPage'
import BrewsPage from './pages/BrewsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ToastMessage from './components/toast/ToastMessage'
import ModalMessage from './components/modal/ModalMessage'
import AuthRoute from './components/auth-routes/AuthRoute'
import { getToken } from './utils/token.utils'

const AppStyle = styled.div`
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .dimmer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .6);
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`

const App = () => {
  const { useLoading, useAuth } = useAppHooks()
  const [{isConnected}, dispatchAuth] = useAuth
  const [{ loading }, dispatchLoading] = useLoading

  return (
    <AppStyle>
      <Navbar />
      <Container>
        <Router>
          <AuthRoute path='/' component={HomePage} />
          <AuthRoute path='cart' component={CartPage} />
          <AuthRoute path='checkout' component={CheckoutPage} />
          <AuthRoute path='brands/:brandId/brews' component={BrewsPage} />
          <AuthRoute path='brands/:brandId/brews/:brewId' component={BrewDetailPage} />
          <LoginPage path='login' />
          <RegisterPage path='register' />
        </Router>
      </Container>
      {/* <Spinner show={loading} accessibilityLabel='Loading Spinner' /> */}
      <Loader
        show={loading}
        dimmer='dimmer'
        spinner='spinner'
        size={250}
      />
      <ToastMessage />
      <ModalMessage />
    </AppStyle>
  )
}

export default App
