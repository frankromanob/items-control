
import { IOrder } from '@/interfaces';
import OrdersForm from './OrdersForm';
import myApi from '@/app/lib/myApi';


interface Props {
    orderId: string
}


export default async function OrdersView({ orderId }: Props) {

    let order: IOrder | null

    const { data, statusText, } = await myApi<IOrder>(`/orders/${orderId==='nuevo'?'':orderId}`)

    if (orderId !== 'nuevo') {
        if (!data && statusText!=='OK') return <>{statusText}</>
        order = data
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



