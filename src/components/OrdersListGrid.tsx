'use client'

import { Grid, Link } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import NextLink from 'next/link';
import { IOrder } from '@/interfaces';


const columns: GridColDef[] = [
  {
    field: 'id', headerName: 'Id Pedido', width: 100, headerAlign: 'center',
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


export const OrdersListGrid = ({orders}:{orders:IOrder[]}) => {


  const rows = orders!.map((order) => ({
    id: order._id,
    customerName: order.customerName,
    status: order.status,
    date: new Date(order.createdAt).toLocaleDateString(),

  }))

  return (
    <>
      <Grid container className='fadeIn' >
        <Grid item lg={12} xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid sx={{
            boxShadow: 2,
            border: 1,
            borderColor: '#F5F256',
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

export default OrdersListGrid

