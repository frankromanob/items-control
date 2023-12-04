'use client'
import useSWR from 'swr'
import { IOrder } from '@/interfaces';
import OrdersForm from './OrdersForm';


interface Props {
    orderId: string
}


export default function OrdersView({ orderId }: Props) {

    let order: IOrder | null

    if (orderId !== 'nuevo') {
        const { data, error, } = useSWR<IOrder>(`/api/orders/${orderId}`)
        if (!data && !error) return <>{error}</>
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
                //     {
                //     id:'',
                //     product:'',
                //     productImage:'',
                //     productName:'',
                //     productSlug:'',
                //     quantity:0,
                //     status:'En proceso',
                //     createdAt:'',
                //     updatedAt:''
                // }
            ],
            createdAt: '',
            updatedAt: ''

        }
    }

    return (
        <OrdersForm order={order} />
    )
}



