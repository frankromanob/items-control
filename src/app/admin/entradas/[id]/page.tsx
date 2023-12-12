
import { Box, Typography } from '@mui/material'
import EntriesView from '@/components/EntriesView';


export default function EntriesAdmin({ params }: { params: { id: string } }) {

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>

        <Box display='flex' marginInlineStart='5px' justifyContent='space-between'  >
          <Typography color='secondary'>Entrada: {params.id}</Typography>
        </Box>

        <EntriesView entryId={params.id} />

      </Box >
  )
}



