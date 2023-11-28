import { db } from '@/database'
import Orders from '@/models/Orders'
import mongoose from 'mongoose';


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    if (mongoose.isValidObjectId(id)) {
        await db.connect()
        const orders = await Orders.findOne({ _id: id }).sort({ title: 'asc' })
        await db.disconnect()
        if (orders) {
            return Response.json(orders)
        } else {
            return new Response('El pedido no existe',{status:400})
        }
    } else {
        return new Response('Id de pedido invalido',{status:400})

    }
}