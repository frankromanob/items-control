
import { IOrder } from '@/interfaces';
import OrdersForm from './OrdersForm';
import { cookies } from 'next/headers';



interface Props {
    orderId: string
}


export default async function OrdersView({ orderId }: Props) {

    const cookieStore = cookies()
    const cookietoken = cookieStore.get('items-control-token')

    let order: IOrder | null

    const resp = await fetch(`${process.env.HOST_NAME}/api/orders/${orderId === 'nuevo' ? '' : orderId}`,
        {
            cache: 'no-store',
            headers: {
                Cookie: `items-control-token=${cookietoken.value}`
            }
        })
    if (!resp.ok) {
        throw new Error('Error al cargar datos de pedidos')
    }
    if (orderId !== 'nuevo') {
        order = await resp.json()
    } else {
        order = {
            _id: '',
            customer: '',
            customerName: '',
            customerEmail: '',
            customerPhone: '',
            status: 'Nuevo',
            orderItems: [

            ],
            createdAt: '',
            updatedAt: ''

        }
    }

    return (
        <OrdersForm order={order} />
    )
}



