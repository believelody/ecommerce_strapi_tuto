import React from 'react'
// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Router, Link } from '@reach/router'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
    <div>
      <nav style={{ border: '1px solid red' }}>
        <Link to='/login'>Login</Link>{' '}
        <Link to='/register'>Register</Link>{' '}
        <Link to='/checkout'>Checkout</Link>
      </nav>
      <Router>
        <HomePage exact path='/' />
        <LoginPage path='/login' />
        <RegisterPage path='/register' />
        <CheckoutPage path='/checkout' />
      </Router>
    </div>
  )
}

export default App
