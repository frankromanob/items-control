'use client'
import { Box, Typography } from '@mui/material'
import { SWRConfig } from 'swr'
import ProductView from '@/components/ProductView';


export default function ProductsAdmin({ params }: { params: { slug: string } }) {

  return (
    <SWRConfig
      value={{
        //refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>

        <Box display='flex'  >
          <Typography color='secondary'>Producto: {params.slug}</Typography>
        </Box>


        <ProductView slug={params.slug} />


      </Box >
    </SWRConfig >
  )
}



