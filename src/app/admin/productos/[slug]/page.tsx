
import { Box, Typography } from '@mui/material'
import ProductView from '@/components/ProductView';


export default function ProductsAdmin({ params }: { params: { slug: string } }) {

  return (

      <Box sx={{ display: 'flex', flexDirection: 'column', }}>

        <Box display='flex'  >
          <Typography color='secondary'>Producto: {params.slug}</Typography>
        </Box>


        <ProductView slug={params.slug} />


      </Box >
  )
}



