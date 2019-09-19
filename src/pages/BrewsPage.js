import React, { useEffect, useState } from 'react'
import Brews from '../components/brews/Brews'
import { useAppHooks } from '../contexts'
import api from '../api'
import { RESET_LOADING, SET_LOADING } from '../reducers/loadingReducer'
import { Box, Heading } from 'gestalt'

const BrewsPage = ({ brandId }) => {
    const { useLoading } = useAppHooks()
    const [{loading}, dispatchLoading] = useLoading

    const [brand, setBrand] = useState(null)

    const fetchBrews = async id => {
        try {
            const res = await api.brew.getBrews(id)
            setBrand(res.data.brand)
            dispatchLoading({ type: RESET_LOADING })
        } catch (error) {
            console.log(error.message)
            dispatchLoading({ type: RESET_LOADING })
        }
    }

    useEffect(() => {
        dispatchLoading({ type: SET_LOADING })
        fetchBrews(brandId)
    }, [])

  return (
    <Box marginTop={4} display='flex' justifyContent='center' alignItems='start'>
        {
            brand &&
            <Box display='flex' direction='column' alignItems='center'>
                <Box margin={2}>
                    <Heading color='orchid'>{brand.name}</Heading>
                </Box>
                <Brews brews={brand.brews} brandId={brand._id} />
            </Box>
        }
    </Box>
  )
}

export default BrewsPage
