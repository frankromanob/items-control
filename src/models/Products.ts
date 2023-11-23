import mongoose, { Schema, model, Model } from 'mongoose'
import { IProduct } from '../interfaces/products'

const productSchema = new Schema({
    description: { type: String, default: '' },
    images: [{ type: String }], default: ['', ''],
    inStock: { type: Number, default: 0 },
    costo: { type: Number, required: true, default: 0 },
    pv: { type: Number, default: 0 },
    bv: { type: Number, default: 0 },
    ibo: { type: Number, default: 0 },
    slug: { type: String, required: true, default: '', unique: true },
    tags: [{ type: String, default: ['', ''] }],
    title: { type: String, required: true },
    type: { type: String, default: '' },
    sizes: { type: String, default: '' },
}, {
    timestamps: true
})

productSchema.index({ title: 'text', tags: 'text', slug: 'text' });

const Products: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);

export default Products





