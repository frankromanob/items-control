'use client'
import  Dashboard from '@/components/Dashboard'
import { Box, Typography } from '@mui/material'
import { SWRConfig } from 'swr'
import Cookies from 'js-cookie'


export default function HomePage() {
  const userName=Cookies.get('items-control-user')
  return (
    <SWRConfig
      value={{
        //refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
        <Box sx={{ m:1, border:0, borderColor:'teal', 
        width:'95%',height:'100%', display: 'flex', flexDirection: 'column', alignItems:'center',alignContent:'center' }}   >
          <Typography sx={{ m:1,  display : userName?'flex':'none'}} variant='h2' color='primary'>Hola {userName}</Typography>
          <Typography sx={{ m:1,  display : 'flex'}} variant='h2' color='primary'>Dashboard</Typography>
        <Dashboard/>
        </Box>


    </SWRConfig>
  )
}
