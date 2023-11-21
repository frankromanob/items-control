import { db } from '@/database'
import Customers from '@/models/Customers'
import { error } from 'console';
import mongoose from 'mongoose';


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    if (mongoose.isValidObjectId(id)) {
        await db.connect()
        const customers = await Customers.findOne({ _id: id }).sort({ title: 'asc' })
        await db.disconnect()
        if (customers) {
            return Response.json(customers)
        } else {
            return new Response('Cliente no existe',{status:400})
        }
    } else {
        return new Response('Id de cliente invalido',{status:400})

    }
}