import React from 'react'
import { Box, Card, Image, Text, Button } from 'gestalt'
import {useAppHooks} from '../../contexts'
import { apiUrl } from '../../api'
import { ADD_TO_CART } from '../../reducers/cartReducer'

const BrewItem = ({ brew }) => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  const addToCart = brew => {
    if (!cart.find(item => item.product.name === brew.name)) {
      dispatchCart({
        type: ADD_TO_CART,
        payload: { product: brew, quantity: 1 }
      })
    }
  }

  return (
    <Box width={300} margin={1} shape="rounded" dangerouslySetInlineStyle={{
      __style: {
        border:'2px solid rgba(0, 0, 0, .2)'
      }
    }}>
      <Card
        image={
          <Box width={300} height={400}>
            <Image
              fit='cover'
              src={`${apiUrl}${brew.image.url}`}
              alt={brew.image.name}
              naturalHeight={1}
              naturalWidth={1}
            />
          </Box>
        }
      >
        <Box display='flex' justifyContent='between' paddingX={2}>
          <Text bold size='xl'>{brew.name}</Text>
          <Text bold size='xl' color='olive'>${brew.price}</Text>
        </Box>
        <Box paddingX={2}>
          <Text>{brew.description}</Text>
        </Box>
        <Box marginTop={2}>
          {
            !cart.find(item => item.product.name === brew.name) ?
            <Button onClick={e => addToCart(brew)} color='blue' text='Add to Cart' /> :
            <Button color='white' text='Added to Cart' />
          }
        </Box>
      </Card>
    </Box>
  )
}

export default BrewItem
