import mongoose, { Schema, model, Model } from 'mongoose'
import { ICustomer } from '../interfaces/'

const customerSchema = new Schema({
    firstName: { type: String, required: true, default: '' },
    lastName: { type: String, required: true, default: '' },
    phone: { type: String, required: true, default: '' },
    email: { type: String, default: '' },

}, {
    timestamps: true
})

customerSchema.index({ firstName: 'text', email: 'text' });

const Customers: Model<ICustomer> = mongoose.models.Customers || model('Customers', customerSchema);

export default Customers





