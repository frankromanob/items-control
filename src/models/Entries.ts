import mongoose, { Schema, model, Model } from 'mongoose'
import { IEntry } from '@/interfaces'


const entrySchema = new Schema({
    product: { type: String, required: true, default: '' },
    quantity: { type: Number, required: true },
    status: { type: String, },
    productName: { type: String, required: true , default: ''},
    productSlug: { type: String, required: true, default: '' },
    productImage: { type: String, required: true, default: '' },

}, {
    timestamps: true
})

const Entry: Model<IEntry> = mongoose.models.Entry || model('Entry', entrySchema)

export default Entry