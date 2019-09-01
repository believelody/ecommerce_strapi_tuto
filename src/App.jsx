import React from 'react'
import 'gestalt/dist/gestalt.css'
import { Router } from '@reach/router'
import styled from 'styled-components'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CheckoutPage from './pages/CheckoutPage'
import Navbar from './components/navbar/Navbar';

const AppStyle = styled.div`
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

const App = () => {
  return (
    <AppStyle>
      <Navbar />
      <Router>
        <HomePage exact path='/' />
        <LoginPage path='/login' />
        <RegisterPage path='/register' />
        <CheckoutPage path='/checkout' />
      </Router>
    </AppStyle>
  )
}

export default App
