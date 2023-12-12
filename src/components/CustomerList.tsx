

import React, { } from 'react'
import { ICustomer } from '@/interfaces';
import { CustomerListGrid } from './CustomerListGrid';
import myApi from '@/app/lib/myApi';



export const CustomersList = async () => {


    const { data, statusText, } = await myApi<ICustomer[]>('/customers')

    if (!data && statusText !== 'OK') return <> {statusText}</>

    return (
      <CustomerListGrid customers={data}/>
    )
  }

export default CustomersList

