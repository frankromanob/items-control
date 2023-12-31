
import { Box, Button } from '@mui/material'
import ProductsList from '@/components/ProductList'
import { AddOutlined } from '@mui/icons-material'
import { revalidatePath } from 'next/cache'


export default function ProductsPage() {
  revalidatePath('/productos')
  return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'flex-start' }}   >
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

        <ProductsList />

      </div>
  )
}
