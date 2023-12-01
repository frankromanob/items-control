'use client'

import { Grid, Link } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import useSWR from 'swr'
import NextLink from 'next/link';
import { IOrder } from '@/interfaces';


const columns: GridColDef[] = [
  {
    field: 'id', headerName: 'Id Pedido', width: 200, headerAlign: 'center',
    renderCell: ({ row }) => {
      return (
        <NextLink href={`/admin/pedidos/${row.id}`} passHref legacyBehavior>
          <Link underline='always'>
            {row.id}
          </Link>
        </NextLink>
      )
    }
  },
  { field: 'customerName', headerName: 'Cliente', width: 200, },
  { field: 'status', headerName: 'Estado', width: 100 },
  { field: 'date', headerName: 'Fecha', width: 200, },
]


export const OrdersList = () => {

  const { data, error, isLoading } = useSWR<IOrder[]>('/api/orders')

  if (!data && !error) return <> {error}</>


  const rows = data!.map((order) => ({
    id: order._id,
    customerName: order.customerName,
    status: order.status,
    date: new Date(order.createdAt).toLocaleDateString(),

  }))

  return (
    <>
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

export default OrdersList

