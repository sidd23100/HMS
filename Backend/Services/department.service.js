import mongoose from "mongoose"
import { Department } from "../Models/department.model.js"
import { Hospital } from "../Models/hospital.model.js"
import { APIError } from "../utils/APIError.js"

const newDepartment = async (data, hospitalId) => {

    const { _id } = hospitalId
    const { department, isActive, description } = data

    // check the format of ObjectId
    if(!mongoose.Types.ObjectId.isValid(hospitalId)){
        throw new APIError(400, "Invalid hospital id")
    }

   const hospital = await Hospital.findById(hospitalId)

   // check the hospital is existed in database or not
   if(!hospital){
    throw new APIError(400, "choose correct hospital OR registered hospital")
   }

    if (!department || typeof isActive !== "boolean" || !description) {
        throw new APIError(400, `all fields are mandatory`)
    }

    const existedDepartment = await Department.findOne({ department: department })
    if (existedDepartment) {
        throw new APIError(400, "Department already created")
    }

    const NewDepartment = await Department.create({
        department,
        isActive,
        description,
        hospitalId: hospitalId
    })

    return NewDepartment

}


export { newDepartment }