import React from 'react'
import CheckoutForm from '../components/forms/CheckoutForm'
import { Elements, StripeProvider, CardElement, injectStripe } from 'react-stripe-elements';

const Checkout = injectStripe(CheckoutForm)

const CheckoutPage = () => {
  return (
    <StripeProvider apiKey={`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`}>
      <Elements>
        <Checkout />
      </Elements>
    </StripeProvider>
  )
}

export default CheckoutPage
