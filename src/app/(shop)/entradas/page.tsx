
import EntriesList from '@/components/EntriesList'
import { AddOutlined } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { revalidatePath } from 'next/cache'


export default function Entries() {
  revalidatePath('/entradas')
  return (

    <div style={{ display: 'flex', flexDirection: 'column', }}>

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
    </div>

  )
}
