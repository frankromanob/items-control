
import EntriesList from '@/components/EntriesList'
import { AddOutlined } from '@mui/icons-material'
import { Box, Button } from '@mui/material'


export default function Entries() {
  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', }}>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, }}   >
        <Button
          size='small'
          sx={{ height: '20px', width: '200px', mb: 1 }}
          startIcon={<AddOutlined />}
          color='secondary'
          href='/admin/entradas/nuevo'
        >
          Dar entrada
        </Button>

      </Box>

      <EntriesList />
    </Box>

  )
}
