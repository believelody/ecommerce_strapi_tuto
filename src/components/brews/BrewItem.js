import React from 'react'
import { Box, Card, Image, Text, Button } from 'gestalt'
import { Link } from '@reach/router'
import { apiUrl } from '../../api'

const BrewItem = ({ brew, brandId }) => {
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
        <Box display='flex' justifyContent='between'>
          <Text bold size='xl'>{brew.name}</Text>
          <Text bold size='xl' color='olive'>${brew.price}</Text>
        </Box>
        <Text>{brew.description}</Text>
        <Box marginTop={2}>
          <Button color='blue' text='Add to Cart' />
        </Box>
      </Card>
    </Box>
  )
}

export default BrewItem
