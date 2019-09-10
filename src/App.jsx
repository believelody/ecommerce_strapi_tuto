import React from 'react'
import { Router } from '@reach/router'
import styled from 'styled-components'
import { Container, Spinner } from 'gestalt'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CheckoutPage from './pages/CheckoutPage'
import Navbar from './components/navbar/Navbar'
import { useAppHooks } from './contexts'
import { SwappingSquaresSpinner, RadarSpinner } from 'react-epic-spinners'

const AppStyle = styled.div`
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .dimmer {
    position: absolute;
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
      <Container>
        <Navbar />
        <Router>
          <HomePage exact path='/' />
          <LoginPage path='/login' />
          <RegisterPage path='/register' />
          <CheckoutPage path='/checkout' />
        </Router>
        {/* <Spinner show={loading} accessibilityLabel='Loading Spinner' /> */}
        {
          loading &&
          <div className="dimmer">
            <RadarSpinner className='spinner' color='deepskyblue' />
          </div>
        }
      </Container>
    </AppStyle>
  )
}

export default App
