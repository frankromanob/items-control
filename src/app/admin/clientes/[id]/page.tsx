
import { Box, Typography } from '@mui/material'
import CustomerView from '@/components/CustomerView';


export default function CustomersAdmin({ params }: { params: { id: string } }) {

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', }}>

      <Box display='flex' marginInlineStart='5px' justifyContent='space-between'  >
        <Typography color='secondary'>Cliente: {params.id}</Typography>
      </Box>

      <CustomerView customerId={params.id} />

    </Box >

  )
}



