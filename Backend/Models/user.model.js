import mongoose, { Schema } from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["ADMIN", "DOCTOR", "PATIENT"],
    },
    password : {
        type : String,
        required : true
    }
})

export const User = mongoose.model("User", userSchema)