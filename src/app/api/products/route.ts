import { db } from '@/database'
import { IProduct } from '@/interfaces'
import Products from '@/models/Products'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
    | { message: string }
    | IProduct[]

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
    await db.connect()
   
    let products = await Products.find().sort({ title: 'asc' }).lean()

    await db.disconnect()


    const updatedProducts = products.map(product => {
        product.images = product.images.map(image => {
            return image.includes('http') ? image : `${process.env.HOST_NAME}/${image}`
        })
        return product
    })

    return Response.json(updatedProducts)
    // return Response.json({ message: 'Example' })
}