import { db } from '@/database'
import { ICustomer } from '@/interfaces'
import Customers from '@/models/Customers'
import { isValidObjectId } from 'mongoose'


type Data =
    | { message: string }
    | ICustomer[]

export async function GET() {
    await db.connect()
    const customers = await Customers.find().sort({ title: 'asc' }).lean()
    await db.disconnect()


    return Response.json(customers)
    // return Response.json({ message: 'Example' })
}

export async function POST(request: Request) {
    const formData = await request.json()
    const { id = '', firstName = '', lastName = '', email = '', phone = '' } = formData

    //console.log(formData)

    await db.connect()
    const customer = await Customers.findOne({ email })
    if (customer) {
        await db.disconnect()
        console.log('El correo ya existe')
        return new Response('El correo ya existe', { status: 400 })
    }

    const newCustomer = new Customers({
        email: email.toLocaleLowerCase(),
        firstName,
        lastName,
        phone,
    })

    try {
        await newCustomer.save({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return new Response('Error al enviar al servidor', { status: 500 })
    }

    await db.disconnect()
    return Response.json(newCustomer)
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
    const { _id = '', firstName = '', lastName = '', email = '', phone = '' } = formData

    if (!isValidObjectId(_id)) {
        console.log('Id incorrecto')
        return new Response('Id de cliente incorrecto', { status: 400 })
    }

    await db.connect()
    const customer = await Customers.findById({ _id })
    if (!customer) {
        await db.disconnect()
        console.log('El cliente no existe')
        return new Response('El cliente no existe', { status: 400 })
    }

    customer.email = email
    customer.firstName = firstName
    customer.lastName = lastName
    customer.phone = phone


    try {
        await customer.save({ validateBeforeSave: true })
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
    const customer = await Customers.findById({ _id:customerId })
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