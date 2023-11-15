'use client'
import styles from '@/app/page.module.css'
import { Typography } from '@mui/material'
import ProductsList from '../components/ProductList'
import { SWRConfig } from 'swr'

export default function Home() {
  return (
    <SWRConfig
      value={{
        //refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <main className={styles.main} style={{
        margin: '0px auto',
        maxWidth: '1440px',
        padding: '0px 0px'
      }}>

        <Typography >Resumen de productos</Typography>
        <ProductsList />
      </main>
    </SWRConfig>
  )
}
