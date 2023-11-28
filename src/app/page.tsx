'use client'
import { Box, Button, Typography } from '@mui/material'
import ProductsList from '../components/ProductList'
import { SWRConfig } from 'swr'
import { AddOutlined } from '@mui/icons-material'
import { Suspense } from 'react'
import Loading from './loading'


export default function Home() {
  return (
    <SWRConfig
      value={{
        //refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'flex-start' }}   >
          {/* <Typography sx={{ mr:3,  display : { xs:'none',sm:'block'}}} color='secondary'>Resumen de productos</Typography> */}
          <Button
            size='small'
            sx={{ height: '20px', width: '200px', mb: 1 }}
            startIcon={<AddOutlined />}
            color='secondary'
            href='/admin/productos/nuevo'
          >
            Agregar Producto
          </Button>
        </Box>
        {/* <Suspense fallback={<Loading />}> */}
          <ProductsList />
        {/* </Suspense> */}

      </Box>
    </SWRConfig>
  )
}
