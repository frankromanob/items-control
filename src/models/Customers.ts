import mongoose, { Schema, model, Model } from 'mongoose'
import { ICustomer } from '../interfaces/'

const customerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, },

}, {
    timestamps: true
})

customerSchema.index({ firstName: 'text', tags: 'text' });

const Customers: Model<ICustomer> = mongoose.models.Customers || model('Customers', customerSchema);

export default Customers





