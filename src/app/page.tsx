'use client'
import { Box, Typography } from '@mui/material'
import { SWRConfig } from 'swr'


export default function ProductsPage() {
  return (
    <SWRConfig
      value={{
        //refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >


        <Box sx={{ ml:1, border:1, borderColor:'teal', 
        width:'95%',height:'100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems:'center',alignContent:'center' }}   >
          <Typography sx={{ ml:1,  display : 'flex'}} color='secondary'>Bienvenido</Typography>

        </Box>


    </SWRConfig>
  )
}
