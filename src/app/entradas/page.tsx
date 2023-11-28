'use client'
import EntriesList from '@/components/EntriesList'
import { AddOutlined } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { SWRConfig } from 'swr'

export default function Entries() {
  return (
    <SWRConfig
    value={{
      //refreshInterval: 3000,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>

    <Box sx={{ display:'flex',  flexDirection : { xs:'column',sm:'row'},  }}   >
          {/* <Typography sx={{ mr:3, display : { xs:'none',sm:'block'}}}  color='secondary'>Mis clientes</Typography> */}
        <Button
          size='small'
          sx={{ height: '20px', width:'200px', mb:1 }}
          startIcon={<AddOutlined />}
          color='secondary'
          href='/admin/entradas/nuevo'
        >
          Dar entrada
        </Button>

      </Box>

      <EntriesList />
    </Box>
  </SWRConfig>
  )
}
