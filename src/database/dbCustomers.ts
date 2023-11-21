import { ICustomer } from "@/interfaces/"
import Customers from "@/models/Customers"
import { db } from "."

export const getAllCustomers = async (): Promise<ICustomer[]> => {
    await db.connect()
    const customers = await Customers.find().select(' -_id').lean()
    await db.disconnect()
    return JSON.parse(JSON.stringify(customers))

}

export const getCustomerById = async (customerId: string): Promise<ICustomer> => {
    await db.connect()
    const customer = await Customers.findOne({ _id: customerId }).lean()
    await db.disconnect()
    return JSON.parse(JSON.stringify(customer))
}
