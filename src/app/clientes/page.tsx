
import CustomerList from '@/components/CustomerList'
import { AddOutlined } from '@mui/icons-material'
import { Box, Button } from '@mui/material'

export default function Customers() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, }}   >
        <Button
          size='small'
          sx={{ height: '20px', width: '200px', mb: 1 }}
          startIcon={<AddOutlined />}
          color='secondary'
          href='/admin/clientes/nuevo'
        >
          Agregar Cliente
        </Button>

      </Box>

      <CustomerList />
    </Box>

  )
}
