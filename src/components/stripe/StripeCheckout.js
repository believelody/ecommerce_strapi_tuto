import React from 'react'
import { Box } from 'gestalt'
import { CardElement } from 'react-stripe-elements';

const StripeCheckout = ({}) => {
  return (
    <Box paddingY={5} paddingX={2} color='lightWash' shape='rounded'>
      <CardElement id='stripe__input' onReady={input => input.focus()} />
    </Box>
  )
}

export default StripeCheckout
