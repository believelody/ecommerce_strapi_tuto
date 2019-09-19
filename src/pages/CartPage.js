import React, { useEffect } from 'react'
import { Link } from '@reach/router'
import { Box, Mask, Heading, Text, Button } from 'gestalt'
import { useAppHooks } from '../contexts'
import CartList from '../components/cart/CartList'
import { IMPORT_CART_FROM_LOCALSTORAGE, RESET_CART, SAVE_CART_TO_LOCALSTORAGE } from '../reducers/cartReducer'
import { getCart } from '../utils/cart.utils'

const CartPage = () => {
    const { useCart } = useAppHooks()
    const [{cart, total}, dispatchCart] = useCart

    const emptyCart = () => {
      dispatchCart({ type: RESET_CART })
      dispatchCart({ type: SAVE_CART_TO_LOCALSTORAGE })
    }

    useEffect(() => {
      if (getCart()) {
        dispatchCart({ type: IMPORT_CART_FROM_LOCALSTORAGE, payload: {cart: getCart()} })
      }
    }, [])

  return (
    <Box marginTop={4}>
      <Mask shape='rounded' wash>
          <Box display='flex' direction='column' alignItems='center' padding={2}>
              <Heading align='center' size='md'>Your cart</Heading>
              <Text color='gray' italic>
                {cart.length} items selected
              </Text>
              <Box display='flex' alignItems='center' justifyContent='center' direction='column'>
                <Box margin={2}>
                    {
                        cart.length === 0 &&
                        <Text color='red' size='xl'>Your cart is empty</Text>
                    }
                    {
                        cart.length > 0 &&
                        <Box>
                            <CartList cart={cart} />
                            <Text bold size='xl' align='center'>Total: ${total.toFixed(2)}</Text>
                            <Link to='/checkout'>
                              <Box paddingY={3} color='navy'>
                                <Text align='center' size='lg' color='white'>
                                    Proceed to payment
                                </Text>
                              </Box>
                            </Link>
                            <Button size='md' text='Empty Cart' onClick={emptyCart} />
                        </Box>
                    }
                </Box>
              </Box>
          </Box>
      </Mask>
    </Box>
  )
}

export default CartPage
