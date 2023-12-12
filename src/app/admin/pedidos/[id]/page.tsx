
import { Box, Typography } from '@mui/material'
import OrdersView from '@/components/OrdersView';


export default function OrdersAdmin({ params }: { params: { id: string } }) {

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', }}>

      <Box display='flex' marginInlineStart='5px' justifyContent='space-between'  >
        <Typography color='secondary'>Pedido: {params.id}</Typography>
      </Box>

      <OrdersView orderId={params.id} />

    </Box >

  )
}



