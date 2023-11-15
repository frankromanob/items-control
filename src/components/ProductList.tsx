'use client'

import { AddOutlined } from '@mui/icons-material'
import { Box, Button, CardMedia, Grid, Link } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'
import useSWR from 'swr'
import { currency } from '@/utils';
import NextLink from 'next/link';
import { IProduct } from '@/interfaces';


const columns: GridColDef[] = [
  {
    field: 'img',
    headerName: 'Foto',
    renderCell: ({ row }) => {
      return (
        <a href={`/product/${row.slug}`} target='_blank'>
          <CardMedia
            component='img'
            className='fadeIn'
            image={`${row.img}`}
          />
        </a>
      )
    },

  },
  {
    field: 'title', headerName: 'Producto', width: 350,
    renderCell: ({ row }) => {
      return (
        <NextLink href={`/admin/products/${row.slug}`} passHref legacyBehavior>
          <Link underline='always'>
            {row.title}
          </Link>
        </NextLink>
      )
    }
  },
  { field: 'description', headerName: 'Descripción', width: 100 },
  { field: 'type', headerName: 'Tipo', width: 120 },
  { field: 'inStock', headerName: 'Existencia', width: 100, align: 'center' },
  { field: 'costo', headerName: 'Costo', width: 100 },
  { field: 'pv', headerName: 'PV', width: 50 },
  { field: 'bv', headerName: 'BV', width: 50 },
  { field: 'sizes', headerName: 'Tamaño', width: 200 },
]

const onFetchProducts= ()=>{
   // const fetcher= (url:string) => fetch(url).then((res) => res.json());
    const {data,error,isLoading} =  useSWR<IProduct[]>('/api/products')
   // console.log('Data: ',data,'Errors:', error,isLoading)
    return ({data,error})
}

export const ProductsList
  =  () => {

    const {data,error} = onFetchProducts()

    if (!data && !error) return <>{error}</>

    const rows = data!.map((product) => ({
      id: product._id,
      img: product.images[0],
      title: product.title,
      type: product.type,
      inStock: product.inStock,
      costo: currency.format(product.costo),
      pv: currency.format(product.pv),
      bv: currency.format(product.bv),
      sizes: product.sizes,
      slug: product.slug,
      description: product.description,
    }))

    return (



      

      // <AdminLayout title={`Productos (${data?.length})`} subTitle={'Administración de Productos'} icon={<CategoryOutlined />}>
      <>
        <Box display='flex' justifyContent='end' sx={{ mb: 1 }} >
          <Button
            startIcon={<AddOutlined />}
            color='secondary'
            href='/admin/products/new'
          >
            Crear Producto
          </Button>

        </Box>
        <Grid container className='fadeIn'>
          <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
            />
          </Grid>
        </Grid>

        {/* </AdminLayout> */}
      </>
    )
  }

export default ProductsList

