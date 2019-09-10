import React from 'react'
import { Router } from '@reach/router'
import styled from 'styled-components'
import { Container, Spinner, Box } from 'gestalt'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CheckoutPage from './pages/CheckoutPage'
import Navbar from './components/navbar/Navbar'
import { useAppHooks } from './contexts'
import Loader from './components/loader/Loader'
import BrewDetailPage from './pages/BrewDetailPage'
import BrewsPage from './pages/BrewsPage'

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
  const { useLoading } = useAppHooks()

  const [{ loading }, dispatchLoading] = useLoading

  return (
    <AppStyle>
      <Navbar />
      <Container>
        <Router>
          <HomePage path='/' />
          <LoginPage path='login' />
          <RegisterPage path='register' />
          <CheckoutPage path='checkout' />
          <BrewsPage path='brands/:brandId/brews' />
          <BrewDetailPage path='brands/:brandId/brews/:brewId' />
        </Router>
      </Container>
      {/* <Spinner show={loading} accessibilityLabel='Loading Spinner' /> */}
      <Loader
        show={loading}
        dimmer='dimmer'
        spinner='spinner'
        size={250}
      />
    </AppStyle>
  )
}

export default App
