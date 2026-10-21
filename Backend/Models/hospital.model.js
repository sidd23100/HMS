import mongoose, { Schema } from "mongoose"

const hospitalSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required :  true,
        },
        email : {
            type :  String,
            required : true,
            unique : true
        },
        phone : {
            type : Number,
            required : true,
            unique : true
        },
        address : {
            type : String,
            required : true
        },
        owner: {
            type : mongoose.Types.ObjectId,
            ref : "User",
            required : true
        }
    }
)

export const Hospital = mongoose.model("Hospital", hospitalSchema)