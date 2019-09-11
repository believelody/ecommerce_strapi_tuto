import React from 'react'
import { Text, IconButton, Box } from 'gestalt'
import { useAppHooks } from '../../contexts'
import { REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, SAVE_CART_TO_LOCALSTORAGE } from '../../reducers/cartReducer'
import { saveCart } from '../../utils/cart.utils'

const CartItem = ({ item }) => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  const removeFromCart = id => {
    dispatchCart({ type: REMOVE_FROM_CART, payload: { _id: id } })
    saveCart(cart)
  }

  const decrementQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatchCart({ type: DECREMENT_QUANTITY, payload: {_id: id} })
      saveCart(cart)
    }
    else
      removeFromCart(id)
  }

  const incrementQuantity = (id) => {
    dispatchCart({ type: INCREMENT_QUANTITY, payload: { _id: id } })
    saveCart(cart)
  }

  return (
    <Box display='flex' alignItems='center'>
      <IconButton
        accessibilityLabel='Decrement'
        icon='dash'
        onClick={e => decrementQuantity(item.product._id, item.quantity)}
        dangerouslySetInlineStyle={{
          __style: {
            color: 'red'
          }
        }}
      />
      <IconButton 
        accessibilityLabel='Increment' 
        icon='add'
        onClick={e => incrementQuantity(item.product._id)}
        dangerouslySetInlineStyle={{
          __style: {
            color: 'green'
          }
        }}
      />
      <Text>
        {item.product.name} x {item.quantity} - ${(item.quantity * item.product.price).toFixed(2)}
      </Text>
      <IconButton
        accessibilityLabel='Delete Item'
        icon='cancel'
        size='sm'
        iconColor='red'
        onClick={e => removeFromCart(item.product._id)}
      />
    </Box>
  )
}

export default CartItem
