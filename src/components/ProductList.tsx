'use client'

import { CardMedia, Grid, Link, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import useSWR from 'swr'
import { currency } from '@/utils';
import NextLink from 'next/link';
import { IProduct } from '@/interfaces';



const columns: GridColDef[] = [
  {
    field: 'img',
    headerName: 'Imagen',
    width: 90,
    renderCell: ({ row }) => {
      return (
        <a href={`/products/${row.slug}`} target='_blank' style={{ margin: '5px' }}>
          <CardMedia
            component='img'
            className='fadeIn'
            image={`${row.img}`}
            height={'50'}
            width={'100'}
          />
        </a>
      )
    },

  },
  {
    field: 'title', headerName: 'Producto', width: 350,
    renderCell: ({ row }) => {
      return (
        <NextLink href={`/admin/productos/${row.slug}`} passHref legacyBehavior>
          <Link underline='always'>
            {row.title}
          </Link>
        </NextLink>
      )
    }
  },
  //{ field: 'description', headerName: 'Descripción', width: 200 },
  { field: 'type', headerName: 'Tipo', width: 120 },
  { field: 'inStock', headerName: 'Existencia', width: 100, align: 'center' },
  { field: 'costo', headerName: 'Costo', width: 100 },
  { field: 'pv', headerName: 'PV', width: 100 },
  { field: 'bv', headerName: 'BV', width: 100 },
  { field: 'ibo', headerName: 'IBO', width: 100 },
  //{ field: 'sizes', headerName: 'Tamaño', width: 200 },
]


export const ProductsList = () => {

  //const { data, error, isLoading } = onFetchProducts()
  const { data, error, isLoading } = useSWR<IProduct[]>('/api/products')


  if (!data && !error) return <>{error}</>



  const rows = data!.map((product) => ({
    id: product._id,
    img: product.images[0],
    title: product.title,
    type: product.type,
    inStock: product.inStock,
    costo: currency.format(product.costo),
    pv: product.pv,
    bv: currency.format(product.bv),
    ibo: product.ibo,
    sizes: product.sizes,
    slug: product.slug,
    description: product.description,
  }))

  return (
    <>
      <Grid key='productGrid' container className='fadeIn'  >
        <Grid item lg={12} xs={12} sx={{ height: 620, width: '100%' }}>
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

export default ProductsList

