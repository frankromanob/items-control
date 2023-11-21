'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { SWRConfig } from 'swr'
import CustomerView from '@/components/CustomerView';


export default function CustomersAdmin({ params }: { params: { id: string } }) {

  return (
    <SWRConfig
      value={{
        //refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>

        <Box display='flex' marginInlineStart='5px' justifyContent='space-between'  >
          <Typography color='secondary'>Cliente: {params.id}</Typography>
        </Box>

        <CustomerView customerId={params.id} />

      </Box >
    </SWRConfig >
  )
}



