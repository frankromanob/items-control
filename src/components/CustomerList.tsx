

import React, { } from 'react'
import { CustomerListGrid } from './CustomerListGrid';
import { cookies } from 'next/headers';



export const CustomersList = async () => {

  const cookieStore = cookies()
  const cookietoken = cookieStore.get('items-control-token')

  const resp = await fetch(process.env.HOST_NAME + '/api/customers',
    {
      cache: 'no-store',
      headers: {
        Cookie: `items-control-token=${cookietoken.value}`
      }
    })

  if (!resp.ok) {
    throw new Error('Error al cargar datos de clientes')
  }
  const data = await resp.json()
  return (
    <CustomerListGrid customers={data} />
  )
}

export default CustomersList

