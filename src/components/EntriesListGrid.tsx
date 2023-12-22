'use client'

import { CardMedia, Grid, Link } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import NextLink from 'next/link';
import { IEntry } from '@/interfaces';


const columns: GridColDef[] = [
  {
    field: 'id', headerName: 'Id Entrada', width: 100, headerAlign: 'center',
    renderCell: ({ row }) => {
      return (
        <NextLink href={`/admin/entradas/${row.id}`} passHref legacyBehavior>
          <Link underline='always'>
            {row.id}
          </Link>
        </NextLink>
      )
    }
  },
  {
    field: 'productImage',
    headerName: 'Foto',
    headerAlign:'center',
    width: 100,
    renderCell: ({ row }) => {
      return (
        <CardMedia
          component='img'
          className='fadeIn'
          image={`${row.productImage}`}
          height={'50'}
          width={'100'}
        />
      )
    },
  },
  {
    field: 'productName', headerName: 'Producto', width: 200, headerAlign: 'center',
    renderCell: ({ row }) => {
      return (
        <NextLink href={`/admin/productos/${row.productSlug}`} passHref legacyBehavior>
          <Link underline='always'>
            {row.productName}
          </Link>
        </NextLink>
      )
    }
  },
  { field: 'quantity', headerName: 'Cantidad', width: 100 },
  { field: 'status', headerName: 'Estado', width: 100 },
  { field: 'date', headerName: 'Fecha', width: 200, },
]



export const EntriesListGrid = ({entries}:{entries:IEntry[]}) => {



  const rows = entries!.map((entry) => ({
    id: entry._id,
    product: entry.product,
    quantity: entry.quantity,
    status: entry.status,
    date: new Date(entry.createdAt).toLocaleDateString(),
    productName: entry.productName,
    productImage: entry.productImage,
    productSlug: entry.productSlug
  }))

  return (
    <>
      <Grid container className='fadeIn' >
        <Grid item lg={12} xs={12} sx={{ height: 650, width:{xs: '100vw', md:'100%'} }}>
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

export default EntriesListGrid

