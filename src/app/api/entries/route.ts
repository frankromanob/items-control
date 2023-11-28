import { db } from '@/database'
import Entries from '@/models/Entries'
import Products from '@/models/Products'
import { isValidObjectId } from 'mongoose'




export async function GET() {
    await db.connect()
    const entries = await Entries.find().sort({ title: 'asc' }).lean()
    await db.disconnect()
    return Response.json(entries)
}

export async function POST(request: Request) {
    const formData = await request.json()
    const { id = '', product = '', productName = '', productSlug = '', productImage = '', quantity = 0, status = 'En proceso' } = formData


    await db.connect()
    // const customer = await Entries.findOne({ email })
    // if (customer) {
    //     await db.disconnect()
    //     console.log('El correo ya existe')
    //     return new Response('El correo ya existe', { status: 400 })
    // }

    const newEntry = new Entries({
        product,
        productName,
        productSlug,
        productImage,
        quantity,
        status:'En proceso',
    })

    try {
        await newEntry.save({ validateBeforeSave: true })

        const productToUpdate = await Products.findById({ _id: product })
        if (productToUpdate) {
            productToUpdate.inStock += Number(quantity)
            await productToUpdate.save({ validateBeforeSave: true })
            newEntry.status='Completada'
            await newEntry.save({ validateBeforeSave: true })
        }


    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    await db.disconnect()
    return Response.json(newEntry)

}

export async function PUT(request: Request) {
    const formData = await request.json()
    const { _id = '', product = '', productName = '', productSlug = '', productImage = '', quantity = 0, status = '' } = formData

    if (!isValidObjectId(_id)) {
        console.log('Id de entrada incorrecto')
        return new Response('Id incorrecto', { status: 400 })
    }

    await db.connect()
    const entry = await Entries.findById({ _id })
    if (!entry) {
        await db.disconnect()
        console.log('El registro de entrada no existe')
        return new Response('El registro de entrada no existe', { status: 400 })
    }

    if (entry.status=='Completada'){return}

    entry.product = product
    entry.quantity = Number(quantity)
    entry.status = status
    entry.productImage = productImage
    entry.productName = productName
    entry.productSlug = productSlug



    try {
        await entry.save({ validateBeforeSave: true })
        const productToUpdate = await Products.findById({ _id: product })
        if (productToUpdate) {
            productToUpdate.inStock += Number(quantity)
            await productToUpdate.save({ validateBeforeSave: true })
            entry.status='Completada'
            await entry.save({ validateBeforeSave: true })
        }

    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    await db.disconnect()
    return Response.json(entry)

}


export async function DELETE(request: Request) {
    const entryId = await request.json()

    if (!isValidObjectId(entryId)) {
        console.log('Id incorrecto')
        return new Response('Id de entrada incorrecto', { status: 400 })
    }

    await db.connect()
    const entry = await Entries.findById({ _id: entryId })
    if (!entry) {
        await db.disconnect()
        console.log('El registro de entrada no existe')
        return new Response('El registro de entrada no existe', { status: 400 })
    }

    try {
        await entry.deleteOne({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    await db.disconnect()
    return Response.json(entry)

}