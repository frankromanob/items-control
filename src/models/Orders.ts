import mongoose, { Schema, model, Model } from 'mongoose'
import { IOrder } from '@/interfaces'

const orderSchema = new Schema({
    customer: { type: String, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    orderItems: [{
        id: { type: String, required: true },
        quantity: { type: Number, required: true },
        status: { type: String, required: true },
        product: { type: String, required: true },
        productName: { type: String, required: true },
        productImage: { type: String, required: true },
        productSlug: { type: String, required: true },

    }, {
        timestamps: true
    }],
    status: { type: String },
}, {
    timestamps: true
})

const Order: Model<IOrder> = mongoose.models.Order || model('Order', orderSchema)

export default Order