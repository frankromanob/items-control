import mongoose, { Schema, model, Model } from 'mongoose'
import {IUser} from '../interfaces/users'

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String }
}, {
    timestamps: true
})

const User:Model<IUser>=mongoose.models.User || model('User',userSchema)

export default User