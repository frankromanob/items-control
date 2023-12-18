import { IProduct } from "@/interfaces/products"
import Products from "@/models/Products"
import { db } from "."
import { IOrderItems } from "@/interfaces"

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


export const decreaseProductQuantity = async (orderItems: IOrderItems[]) => {

    try {
        orderItems.map(async (item: IOrderItems, key) => {
           // await db.connect()
            const productToUpdate = await Products.findById({ _id: item.product })
            if (productToUpdate) {
                productToUpdate.inStock -= Number(item.quantity)
                await productToUpdate.save()
            }
          //  await db.disconnect()
        })

    } catch (error) {
        console.log(error)
        //await db.disconnect()
        return new Response('Error al rebajar inventario', { status: 500 })
    }


}


export const increaseProductQuantity = async (product: string, quantity: number) => {

    try {
        //await db.connect()
        const productToUpdate = await Products.findById({ _id: product })
        if (productToUpdate) {
            productToUpdate.inStock += Number(quantity)
            await productToUpdate.save()
        }
       // await db.disconnect()

    } catch (error) {
        console.log(error)
       // await db.disconnect()
        return new Response('Error al incrementar inventario', { status: 500 })
    }


}