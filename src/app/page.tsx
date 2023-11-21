'use client'
import { Box, Button, Typography } from '@mui/material'
import ProductsList from '../components/ProductList'
import { SWRConfig } from 'swr'
import { AddOutlined } from '@mui/icons-material'

export default function Home() {
  return (
    <SWRConfig
      value={{
        //refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>

        <Box display='flex' justifyContent='space-between'  >
          <Typography color='secondary'>Resumen de productos</Typography>
          <Button
            size='small'
            sx={{ height: '20px' }}
            startIcon={<AddOutlined />}
            color='secondary'
            href='/admin/productos/new'
          >
            Agregar Producto
          </Button>
        </Box>
        <ProductsList />
      </Box>
    </SWRConfig>
  )
}
