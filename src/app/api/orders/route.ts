import { db } from '@/database'
import { IOrder, IOrderItems } from '@/interfaces'
import Customers from '@/models/Customers'
import Orders from '@/models/Orders'
import Products from '@/models/Products'
import { isValidObjectId } from 'mongoose'



export async function GET() {
    await db.connect()
    const orders = await Orders.find().sort({ title: 'asc' }).lean()
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

    // console.log(formData)

    await db.connect()
    // const customer = await Customers.findOne({ email })
    // if (customer) {
    //     await db.disconnect()
    //     console.log('El correo ya existe')
    //     return new Response('El correo ya existe', { status: 400 })
    // }

    const newOrder = new Orders({
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
    const formData:IOrder = await request.json()
    console.log(formData)
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
    const order = await Orders.findById({ _id })
    if (!order) {
        await db.disconnect()
        console.log('El pedido no existe')
        return new Response('El pedido no existe', { status: 400 })
    }

    if (status == 'Completado') {

        try {
            orderItems.map(async (item:IOrderItems,key) => {
                const productToUpdate = await Products.findById({ _id: item.product })
                if (productToUpdate) {
                    productToUpdate.inStock -= Number(item.quantity)
                    order.orderItems[key].status = 'Completado'
                }
                await productToUpdate.save({ validateBeforeSave: true })
            })

        } catch (error) {
            console.log(error)
            return new Response('Error al enviar al servidor', { status: 500 })
        }

    } else {
        order.customer = customer
        order.customerName = customerName
        order.customerPhone = customerPhone
        order.customerEmail = customerEmail
        order.status=status
        order.orderItems = orderItems

    }



    try {
        await order.save({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    await db.disconnect()
    return Response.json(customer)

}


export async function DELETE(request: Request) {
    const customerId = await request.json()

    if (!isValidObjectId(customerId)) {
        console.log('Id incorrecto')
        return new Response('Id de cliente incorrecto', { status: 400 })
    }

    await db.connect()
    const customer = await Customers.findById({ _id: customerId })
    if (!customer) {
        await db.disconnect()
        console.log('El cliente no existe')
        return new Response('El cliente no existe', { status: 400 })
    }

    try {
        await customer.deleteOne({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    await db.disconnect()
    return Response.json(customer)

}