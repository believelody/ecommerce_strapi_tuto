import React from 'react';
import { Box, Text } from 'gestalt';

const CartResume = ({ cart, total }) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      direction='column'
      marginTop={2}
      marginBottom={4}
    >
      <Text color='darkGray' italic>{cart.length} {cart.length === 1 ? 'item' : 'items'} for checkout</Text>
      <Box padding={2}>
        {
          cart.map(item => (
            <Box key={item.product._id} padding={1}>
              <Text color='midnight'>
                {item.product.name} x {item.quantity} - ${item.quantity * item.product.price}
              </Text>
            </Box>
          ))
        }
      </Box>
      <Text bold>Total Amount: ${total}</Text>
    </Box>
  );
}

export default CartResume;
