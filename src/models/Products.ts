import mongoose, { Schema, model, Model } from 'mongoose'
import { IProduct } from '../interfaces/products'

const productSchema = new Schema({
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    costo: { type: Number, required: true, default: 0 },
    pv: { type: Number, required: true, default: 0 },
    bv: { type: Number, required: true, default: 0 },
    ibo: {type: Number, required: true, default: 0 },
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: { type: String},
    sizes: { type: String},
}, {
    timestamps: true
})

productSchema.index({ title: 'text', tags: 'text' });

const Products: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);

export default Products





