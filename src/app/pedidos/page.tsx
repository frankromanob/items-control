'use client'
import OrdersList from '@/components/OrdersList'
import { AddOutlined } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { SWRConfig } from 'swr'

export default function Orders() {
  return (
    <SWRConfig
    value={{
      //refreshInterval: 3000,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>

    <Box sx={{ display:'flex',  flexDirection : { xs:'column',sm:'row'},  }}   >
        <Button
          size='small'
          sx={{ height: '20px', width:'200px', mb:1 }}
          startIcon={<AddOutlined />}
          color='secondary'
          href='/admin/pedidos/nuevo'
        >
          Nuevo pedido
        </Button>

      </Box>

      <OrdersList />
    </Box>
  </SWRConfig>
  )
}
