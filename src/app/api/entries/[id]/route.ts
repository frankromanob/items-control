import { db } from '@/database'
import Entries from '@/models/Entries'
import mongoose from 'mongoose';


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    if (mongoose.isValidObjectId(id)) {
        await db.connect()
        const entries = await Entries.findOne({ _id: id }).sort({ title: 'asc' })
        await db.disconnect()
        if (entries) {
            return Response.json(entries)
        } else {
            return new Response('El registro de entrada no existe',{status:400})
        }
    } else {
        return new Response('Id de entrada invalido',{status:400})

    }
}