import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
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
    },
    hospitalId : {
        type : mongoose.Types.ObjectId,
        ref: "Hospital",
        required : true
    }
})

export const Department = mongoose.model("Department", departmentSchema)