import { model, Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    password: {
        type:String,
        required: true,
        select: false
    },
    phone: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})





export const user = model("User",userSchema)

export const getUsers = () => user.find();
export const getEmail = (email: string) => user.findOne({ email });
export const getUserById = (id: string) => user.findById(id);
export const createUser = (values: Record<string, any>) => new user(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) => user.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) => user.findByIdAndUpdate(id, values);