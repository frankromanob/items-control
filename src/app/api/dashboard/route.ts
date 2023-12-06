import { db } from '@/database';
import Products from '@/models/Products';
import Customers from '@/models/Customers'
import Orders from '@/models/Orders'




export async function GET() {

    await db.connect()
    const totalOrders = (await Orders.countDocuments()).valueOf()
    const completedOrders = (await Orders.countDocuments({ status: 'Completado' })).valueOf()
    const totalClients = (await Customers.countDocuments()).valueOf()
    const totalProducts = (await Products.countDocuments()).valueOf()
    const productosWithoutInventory = (await Products.countDocuments({ inStock: 0 })).valueOf()
    const lowInventory = (await Products.countDocuments({ inStock: { $lte: 10 } })).valueOf()
    await db.disconnect()

    return  Response.json({
        totalOrders,
        completedOrders,
        pendingOrders: totalOrders - completedOrders,
        totalClients,
        totalProducts,
        productosWithoutInventory,
        lowInventory
    })

}