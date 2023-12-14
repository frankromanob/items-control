

import React, { } from 'react'
import { CustomerListGrid } from './CustomerListGrid';



export const CustomersList = async () => {


  const resp = await fetch(process.env.HOST_NAME + '/api/customers', { cache: 'no-store' })

  if (!resp.ok) {
    throw new Error('Error al cargar datos de clientes')
  }
  const data = await resp.json()
  return (
    <CustomerListGrid customers={data} />
  )
}

export default CustomersList

