import React from 'react'
import { Box, Heading } from 'gestalt'

const Header = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            marginBottom={2}
        >
            <Heading size='md' color='midnight'>
                Brew Brands
            </Heading>
        </Box>
    )
}

export default Header
