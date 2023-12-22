
import { cookies } from 'next/headers';
import { OrdersListGrid } from './OrdersListGrid';



export const OrdersList = async () => {

  const cookieStore = cookies()
  const cookietoken = cookieStore.get('items-control-token')

  const resp = await fetch(process.env.HOST_NAME + '/api/orders',
    {
      cache: 'no-store',
      headers: {
        Cookie: `items-control-token=${cookietoken.value}`
      }
    })

  if (!resp.ok) {
    throw new Error('Error al cargar datos de pedidos')
  }
  const data = await resp.json()


  return (
    <OrdersListGrid orders={data} />
  )
}

export default OrdersList

