import { db } from '@/database'
import Products from '@/models/Products'
import { isValidObjectId } from 'mongoose';


export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const { slug } = params;
    let id = null;

    if (isValidObjectId(slug)) {
        id = slug
    }

    await db.connect()
    const products = await Products.findOne({ $or: [{ slug }, { _id: id }] }).lean()
    await db.disconnect()

    if (!products) {
        return Response.json({ message: 'Producto no encontrado' })
    }

    products.images = products.images.map(image => {
        return image.includes('http') ? image : `${process.env.HOST_NAME}/${image}`
    })

    return Response.json(products)
}