import mongoose, { Schema, model, Model } from 'mongoose'
import { IOrder } from '@/interfaces'

const orderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    orderItems: [{
        _id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        status: { type: String, required: true },
    }],
    status: { type: String },
}, {
    timestamps: true
})

const Order: Model<IOrder> = mongoose.models.Order || model('Order', orderSchema)

export default Order