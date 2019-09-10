import React from 'react'
import { Box, Card, Image, Text } from 'gestalt'
import { apiUrl } from '../../api'
import { Link } from '@reach/router'

const BrandItem = ({ brand }) => {
  return (
    <Box width={200} margin={5}>
      <Card
        image={
            <Box width={200} height={200}>
                <Image
                    fit='cover'
                    src={`${apiUrl}${brand.image.url}`}
                    alt={brand.image.name}
                    naturalHeight={1}
                    naturalWidth={1}
                />
            </Box>
        }
      >
        <Text bold size='xl'>{brand.name}</Text>
        <Text >{brand.description}</Text>
        <Text size='xl'>
            <Link to={`brands/${brand._id}/brews`}>See More</Link>
        </Text>
      </Card>
    </Box>
  )
}

export default BrandItem
