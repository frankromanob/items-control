import mongoose, { Schema, model, Model } from 'mongoose'
import { IEntry } from '@/interfaces'


const entrySchema = new Schema({
    product:  { type: String, required: true },
    quantity: { type: Number, required: true },
    status:   { type: String, required: true },
}, {
    timestamps: true
})

const Entry: Model<IEntry> = mongoose.models.Entry || model('Entry', entrySchema)

export default Entry