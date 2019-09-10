import React from 'react'
import { Box, SearchField } from 'gestalt'

const Search = ({ accessibilityLabel, placeholder, handleChange, value }) => {
  return (
    <Box display='flex' justifyContent='center' marginTop={4}>
        <SearchField
            id='searchField'
            accessibilityLabel={accessibilityLabel}
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
        />
    </Box>
  )
}

export default Search
