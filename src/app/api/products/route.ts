import { db } from '@/database'
import { IProduct } from '@/interfaces'
import Products from '@/models/Products'
import { isValidObjectId } from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { v2 as cloudinary } from 'cloudinary'

type Data =
    | { message: string }
    | IProduct[]

export async function GET() {
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



export async function POST(request: Request) {
    const formData = await request.json()
    const { id = '',
        title = '',
        description = '',
        slug = '',
        tags = '',
        pv = 0,
        bv = 0,
        ibo = 0,
        costo = 0,
        inStock = 0,
        sizes = '',
        images = '',
        type = ''
    } = formData

    //console.log(formData)

    await db.connect()
    const product = await Products.findOne({ slug })
    if (product) {
        await db.disconnect()
        console.log('El slug ya existe')
        return new Response('El slug ya existe', { status: 400 })
    }

    const newProduct = new Products({
        title,
        description,
        slug,
        tags,
        sizes,
        images,
        type,
        costo,
        pv,
        bv,
        ibo,
        inStock,
    })

    try {
        await newProduct.save({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    await db.disconnect()
    return Response.json(newProduct)
    //return Response.json({message:'hola POST'})

    // if (!validations.isValidEmail(email)) {
    //     return res.status(400).json({ message: 'Correo con formato inválido' })
    // }

    // const { _id, role } = newUser;

    // const token = jwt.signToken(_id, email)

    // return res.status(200).json({
    //     token,
    //     user: {
    //         email, role, name
    //     }
    // })
    // return Response.json({ message: 'Example' })
}

export async function PUT(request: Request) {
    const formData = await request.json()
    const { _id = '',
        title = '',
        description = '',
        slug = '',
        tags = [],
        pv = 0,
        bv = 0,
        ibo = 0,
        costo = 0,
        inStock = 0,
        sizes = '',
        images = [],
        type = '',
    } = formData

    if (!isValidObjectId(_id)) {
        console.log('Id incorrecto')
        return new Response('Id de product incorrecto', { status: 400 })
    }

    await db.connect()
    const product = await Products.findById({ _id })
    if (!product) {
        await db.disconnect()
        console.log('El product no existe')
        return new Response('El product no existe', { status: 400 })
    }

    product.title = title
    product.description = description
    product.slug = slug
    product.tags = tags
    product.sizes = sizes
    product.type = type
    product.costo = costo
    product.pv = pv
    product.bv = bv
    product.ibo = ibo
    product.inStock = inStock

    try {
        //delete image
        product.images.forEach(async (image) => {
            if (!images.includes(image)) {
                console.log('borrar img')
                const [fileId, Extension] = image.substring(image.lastIndexOf('/') + 1).split('.')
                console.log(fileId)
                await cloudinary.uploader.destroy(fileId);
            }
        })

    } catch (error) {
        console.log(error)
        return new Response('No se pudo eliminar la imagen del cloud', { status: 500 })
    }
    product.images = images
    try {
        await product.save({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }



    await db.disconnect()
    return Response.json(product)

}


export async function DELETE(request: Request) {
    const { productId, images = [] } = await request.json()


    if (!isValidObjectId(productId)) {
        console.log('Id incorrecto')
        return new Response('Id de producto incorrecto', { status: 400 })
    }

    await db.connect()
    const product = await Products.findById({ _id: productId })
    if (!product) {
        await db.disconnect()
        console.log('El producto no existe')
        return new Response('El producto no existe', { status: 400 })
    }

    try {
        await product.deleteOne({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    try {
        //delete image
        images.forEach(async (image) => {

            console.log('borrar img')
            const [fileId, Extension] = image.substring(image.lastIndexOf('/') + 1).split('.')
            console.log(fileId)
            await cloudinary.uploader.destroy(fileId);

        })
    } catch (error) {
        console.log(error)
        return new Response('No se pudo eliminar la imagen del cloud', { status: 500 })
    }

    await db.disconnect()
    return Response.json(product)

}