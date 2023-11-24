import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedDataProducts, seedDataUsers, seedDataCustomers } from '../../../database'
import Users from '@/models/Users'
import Products from '@/models/Products'
import Customers from '@/models/Customers'


type Data = {
    message: string
}

export function PUT() {

    if (process.env.NODE_ENV === 'production') {
        return new Response('No es posible para producción', { status: 400 })
    }
    return setSeed()


}

const setSeed = async () => {

    await db.connect()
    await Users.deleteMany();
    await Users.insertMany(seedDataUsers.initialDataUsers.users)

    // await Customers.deleteMany();
    // await Customers.insertMany(seedDataCustomers.initialDataCustomers.customers)

    // await Products.deleteMany();
    // await Products.insertMany(seedDataProducts.initialDatProducts.products)


    await db.disconnect()


    return Response.json({
        message: 'Seed data poblada'
    })

}
