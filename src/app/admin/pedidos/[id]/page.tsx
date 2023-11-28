'use client'
import { Box, Typography } from '@mui/material'
import { SWRConfig } from 'swr'
import OrdersView from '@/components/OrdersView';


export default function OrdersAdmin({ params }: { params: { id: string } }) {

  return (
    <SWRConfig
      value={{
        //refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>

        <Box display='flex' marginInlineStart='5px' justifyContent='space-between'  >
          <Typography color='secondary'>Entrada: {params.id}</Typography>
        </Box>

        <OrdersView orderId={params.id} />

      </Box >
    </SWRConfig >
  )
}



