
import OrdersList from '@/components/OrdersList'
import { AddOutlined } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { revalidatePath } from 'next/cache'

export default function Orders() {
  revalidatePath('/pedidos')
  return (

    <div style={{ display: 'flex', flexDirection: 'column', }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, }}   >
        <Button
          size='small'
          sx={{ height: '20px', width: '200px', mb: 1 }}
          startIcon={<AddOutlined />}
          color='secondary'
          href='/admin/pedidos/nuevo'
        >
          Nuevo pedido
        </Button>
      </Box>

      <OrdersList />
    </div>

  )
}
