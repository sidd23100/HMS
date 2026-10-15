import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    hospitalId : {
        type : mongoose.Types.ObjectId,
        ref: "Hospital"
    },
    department : {
        type : String,
        required : true
    },
    isActive : {
        type : Boolean,
    },
    description : {
        type : String,
        required : true
    }
})

export const Department = mongoose.model("Department", departmentSchema)