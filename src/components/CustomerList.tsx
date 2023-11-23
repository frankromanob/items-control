'use client'

import { Grid, Link, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import NextLink from 'next/link';
import { ICustomer } from '@/interfaces';


const columns: GridColDef[] = [
  {
    field: 'id', headerName: 'ID', width: 200, headerAlign: 'center',
    renderCell: ({ row }) => {
      return (
        <NextLink href={`/admin/clientes/${row.id}`} passHref legacyBehavior>
          <Link underline='always'>
            {row.id}
          </Link>
        </NextLink>
      )
    }
  },
  { field: 'email', headerName: 'Correo', width: 200 },
  { field: 'firstName', headerName: 'Nombre', width: 100 },
  { field: 'lastName', headerName: 'Apellido', width: 100 },
  { field: 'phone', headerName: 'Teléfono', width: 120, align: 'right', headerAlign: 'right' },
]

const onFetchCustomers = () => {
  const { data, error, isLoading } = useSWR<ICustomer[]>('/api/customers')
  return ({ data, error, isLoading })
}

export const CustomersList
  = () => {

    const { data, error, isLoading } = onFetchCustomers()

    const [cargando, setCargando] = useState(false)

    useEffect(() => {
      setCargando(isLoading)
    }, [isLoading])

    if (!data && !error) return <> {error}</>



    const rows = data!.map((customer) => ({
      id: customer._id,
      email: customer.email,
      firstName: customer.firstName,
      lastName: customer.lastName,
      phone: customer.phone,
    }))

    return (
      cargando ? <> {<Typography margin='20px' display='flex' justifyContent='center' variant='h1' color='primary'>...Cargando datos</Typography>}</>
        : <>
          <Grid container className='fadeIn' >
            <Grid item lg={12} xs={8} sx={{ height: 650, width: '100%' }}>
              <DataGrid sx={{
                boxShadow: 2,
                border: 1,
                borderColor: 'teal',
                color: 'secondary.main',
                '& .MuiDataGrid-cell:hover': {
                  color: 'primary.main',
                },
              }}
                rows={rows}
                columns={columns}
                autoPageSize
              />
            </Grid>
          </Grid>
        </>
    )
  }

export default CustomersList

