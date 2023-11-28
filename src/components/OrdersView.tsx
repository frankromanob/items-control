'use client'
import useSWR from 'swr'
import { IOrder,IOrderItems } from '@/interfaces';
import OrdersForm from './OrdersForm';




interface Props {
    orderId: string
}


export default function OrdersView({ orderId }: Props) {

    const { data, error, } = useSWR<IOrder>(`/api/orders/${orderId}`)
    let order: IOrder | null

    if (orderId !== 'nuevo') {
        if (!data && !error) return <>{error}</>
        order = data
    } else {
        // order = {
        //     _id: '',
        //     products: ',
        //     productImage: '',
        //     productName: '',
        //     productSlug: '',
        //     status: 'En proceso',
        //     quantity: 0,
        //     createdAt: '',
        //     updatedAt: ''

        // }
    }

    return (
        <OrdersForm order={order} />
    )
}



