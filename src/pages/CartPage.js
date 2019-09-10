import React, { useEffect } from 'react'
import { Link } from '@reach/router'
import { Box, Mask, Heading, Text } from 'gestalt'
import { useAppHooks } from '../contexts'

const CartPage = () => {
    const { useCart } = useAppHooks()
    const [{cart, total}, dispatchCart] = useCart
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
                            <Text size='lg'>Total: $ {total}</Text>
                            <Text>
                                <Link to='/checkout'>Proceed to payment</Link>
                            </Text>
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
