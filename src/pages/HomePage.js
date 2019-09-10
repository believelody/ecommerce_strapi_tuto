import React, { useEffect, useState } from 'react'
import api from '../api'
import { Box } from 'gestalt'
import Brands from '../components/brands/Brands'
import Header from '../components/header/Header'
import Search from '../components/search/Search'

const HomePage = () => {
  const [brands, setBrands] = useState([])
  const [search, setSearch] = useState('')

  const fetchBrands = async () => {
    try {
      const res = await api.brand.getBrands()

      setBrands(res.data.brands)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const handleSearch = ({ value }) => {
    setSearch(value)
  }

  useEffect(() => {
    fetchBrands()
  }, [])

  return (
    <Box>
      <Search
        placeholder='Search Brands'
        accessibilityLabel='Brands Search Field'
        handleChange={handleSearch}
        value={search}
      />
      <Header />
      <Brands brands={brands} search={search} />
    </Box>
  )
}

export default HomePage
