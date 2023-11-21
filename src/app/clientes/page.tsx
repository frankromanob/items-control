'use client'
import CustomerList from '@/components/CustomerList'
import { AddOutlined } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import { SWRConfig } from 'swr'

export default function Customers() {
  return (
    <SWRConfig
    value={{
      //refreshInterval: 3000,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>

      <Box display='flex' justifyContent='space-between'  >
        <Typography color='secondary'>Mis clientes</Typography>
        <Button
          size='small'
          sx={{ height: '20px' }}
          startIcon={<AddOutlined />}
          color='secondary'
          href='/admin/clientes/nuevo'
        >
          Agregar Cliente
        </Button>

      </Box>

      <CustomerList />
    </Box>
  </SWRConfig>
  )
}
