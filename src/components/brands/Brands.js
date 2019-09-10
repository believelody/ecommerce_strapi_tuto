import React from 'react'
import { Box } from 'gestalt'
import styled from 'styled-components'
import BrandItem from './BrandItem'

const BrandsStyle = styled.div`
    background-color: #d6c8ec;
    border-radius: 5px;
`

const Brands = ({ brands, search }) => {

  return (
    <BrandsStyle>
        <Box
            wrap
            display='flex' 
            justifyContent='around'
        >
        {
            brands.length > 0 &&
            brands
                .filter(brand => brand.name.toLowerCase().includes(search))
                .map(brand => <BrandItem key={brand._id} brand={brand} />)
        }
        </Box>
    </BrandsStyle>
  )
}

export default Brands
