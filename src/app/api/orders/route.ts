import { db, dbProducts } from '@/database'
import { IOrder } from '@/interfaces'
import Order from '@/models/Orders'
import { isValidObjectId } from 'mongoose'



export async function GET() {
    await db.connect()
    const orders = await Order.find().sort({ title: 'asc' }).lean()
    await db.disconnect()

    return Response.json(orders)
}

export async function POST(request: Request) {
    const formData = await request.json()
    const {
        id = '',
        customer = '',
        customerName = '',
        customerEmail = '',
        customerPhone = '',
        status = '',
        orderItems = {}
    } = formData


    await db.connect()


    const newOrder = new Order({
        customer,
        customerName,
        customerEmail,
        customerPhone,
        status,
        orderItems
    })

    try {
        await newOrder.save({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    await db.disconnect()
    return Response.json(newOrder)

}

export async function PUT(request: Request) {
    const formData: IOrder = await request.json()
    const {
        _id = '',
        customer = '',
        customerName = '',
        customerEmail = '',
        customerPhone = '',
        status = '',
        orderItems
    } = formData

    if (!isValidObjectId(_id)) {
        console.log('Id incorrecto')
        return new Response('Id del pedido incorrecto', { status: 400 })
    }

    await db.connect()
    const order = await Order.findById({ _id })
    if (!order) {
        await db.disconnect()
        console.log('El pedido no existe')
        return new Response('El pedido no existe', { status: 400 })
    }

    if (status == 'Completado') {

        try {
            await dbProducts.decreaseProductQuantity(orderItems)

        } catch (error) {
            console.log(error)
            await db.disconnect()
            return new Response('Error al rebajar inventario', { status: 500 })
        }

    }

    order.customer = customer
    order.customerName = customerName
    order.customerPhone = customerPhone
    order.customerEmail = customerEmail
    order.status = status
    order.orderItems = orderItems


    try {
        await order.save({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        await db.disconnect()
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    await db.disconnect()
    return Response.json(order)

}


export async function DELETE(request: Request) {

    const orderId = await request.json()

    if (!isValidObjectId(orderId)) {
        console.log('Id incorrecto')
        return new Response('Id de pedido incorrecto', { status: 400 })
    }

    await db.connect()
    const order = await Order.findById({ _id: orderId })
    if (!order) {
        await db.disconnect()
        console.log('El pedido no existe')
        return new Response('El pedido no existe', { status: 400 })
    }

    try {
        await order.deleteOne({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    await db.disconnect()
    return Response.json(order)

}