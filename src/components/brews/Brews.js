import React from 'react'
import { Box } from 'gestalt'
import BrewItem from './BrewItem'

const Brews = ({ brews, brandId }) => {
  return (
    <Box
      wrap
      dangerouslySetInlineStyle={{
        __style: {
          backgroundColor: '#bdcdd9'
        }
      }}
      shape='rounded'
      display='flex'
      justifyContent='center'
    >
      {
        brews.length > 0 && brews.map(brew => <BrewItem key={brew._id} brew={brew} brandId={brandId} />)
      }
    </Box>
  )
}

export default Brews
