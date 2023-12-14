
import { OrdersListGrid } from './OrdersListGrid';



export const OrdersList = async () => {

  const resp = await fetch(process.env.HOST_NAME + '/api/orders', { cache: 'no-store' })

  if (!resp.ok) {
    throw new Error('Error al cargar datos de pedidos')
  }
  const data = await resp.json()


  return (
    <OrdersListGrid orders={data} />
  )
}

export default OrdersList

