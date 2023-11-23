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

    <Box sx={{ display:'flex',  flexDirection : { xs:'column',sm:'row'},  }}   >
          {/* <Typography sx={{ mr:3, display : { xs:'none',sm:'block'}}}  color='secondary'>Mis clientes</Typography> */}
        <Button
          size='small'
          sx={{ height: '20px', width:'200px', mb:1 }}
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
