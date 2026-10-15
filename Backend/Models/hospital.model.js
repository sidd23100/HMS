import mongoose, { Schema } from "mongoose"

const hospitalSchema = new mongoose.Schema(
    {
        owner: {
            type : mongoose.Types.ObjectId,
            ref : "User"
        },
        hospitalName : {
            type : String,
            required :  true,
        },
        hospitalEmail : {
            type :  String,
            required : true,
            unique : true
        },
        hospitalPhone : {
            type : Number,
            required : true,
            unique : true
        },
        hospitalAddress : {
            type : String,
            required : true
        }
    }
)

export const Hospital = mongoose.model("Hospital", hospitalSchema)