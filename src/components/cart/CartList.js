import React from 'react'
import { Box } from 'gestalt'
import CartItem from './CartItem'

const CartList = ({ cart }) => {
  return (
    <Box>
      {
        cart.map(item => <CartItem key={item.product._id} item={item} />)
      }
    </Box>
  )
}

export default CartList
