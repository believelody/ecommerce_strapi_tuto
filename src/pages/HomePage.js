import React, { useEffect, useState } from 'react'
import api from '../api'
import { Box } from 'gestalt'
import Brands from '../components/brands/Brands'
import Header from '../components/header/Header'
import Search from '../components/search/Search'
import { useAppHooks } from '../contexts'
import { RESET_LOADING, SET_LOADING } from '../reducers/loadingReducer'

const HomePage = () => {
  const { useLoading } = useAppHooks()

  const [{loading}, dispatchLoading] = useLoading

  const [brands, setBrands] = useState([])
  const [search, setSearch] = useState('')

  const fetchBrands = async () => {
    try {
      const res = await api.brand.getBrands()

      setBrands(res.data.brands)
      resetLoading()
    } catch (error) {
      console.log(error.response.data)
      resetLoading()
    }
  }

  const handleSearch = ({ value }) => {
    setSearch(value)
  }

  const resetLoading = () => dispatchLoading({ type: RESET_LOADING })
  const setLoading = () => dispatchLoading({ type: SET_LOADING })

  useEffect(() => {
    setLoading()
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
