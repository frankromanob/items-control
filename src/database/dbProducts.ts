import { IProduct } from "@/interfaces/products"
import Products from "@/models/Products"
import { db } from "."

export const getAllProducts = async (): Promise<IProduct[]> => {
    await db.connect()
    const products = await Products.find().select(' -_id').lean()
    await db.disconnect()
    const updatedProducts = products.map(product => {
        product.images = product.images.map(image => {
            return image.includes('http') ? image : `${process.env.HOST_NAME}/${image}`
        })
        return product
    })
    return JSON.parse(JSON.stringify(updatedProducts))

}


export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
    await db.connect()
    const product = await Products.findOne({ slug }).lean()
    await db.disconnect()

    if (product) {
        product.images = product.images.map(image => {
            return image.includes('http') ? image : `${process.env.HOST_NAME}/${image}`
        })
        return JSON.parse(JSON.stringify(product));
    } else {
        return null
    }


}