
import { IOrder } from '@/interfaces';
import myApi from '@/app/lib/myApi';
import { OrdersListGrid } from './OrdersListGrid';



export const OrdersList = async () => {

  const { data, statusText,  } = await myApi<IOrder[]>('/orders')

  if (!data && statusText!=='OK') return <> {statusText}</>


  return (
    <OrdersListGrid orders={data}/>
  )
}

export default OrdersList

