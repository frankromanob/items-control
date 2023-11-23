import { db } from '@/database'
import Products from '@/models/Products'


export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const slug = params.slug;
    let condition = {}


    if (slug !== '') {
        condition = { slug }
    }

    await db.connect()
    const products = await Products.findOne(condition).lean()
    await db.disconnect()

    if (products) {
        products.images = products.images.map(image => {
            return image.includes('http') ? image : `${process.env.HOST_NAME}/${image}`
        })
        return Response.json(products)
    } else {

        return Response.json({ message: 'Producto no encontrado' })
    }
    // return Response.json({ message: 'Example' })
}