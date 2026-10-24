import mongoose from "mongoose"
import { Hospital } from "../Models/hospital.model.js"
import { APIError } from "../utils/APIError.js"

const createHospital = async (data, userId) => {
    const { name, email, phone, address } = data


    if (!name || !email || !phone || !address) {
        throw new APIError(400, "hospital details are required")
    }

    const existedHospital = await Hospital.findOne({ email: email })

    if (existedHospital) {
        throw new APIError(400, "Hospital already registered")
    }

    const newHospital = await Hospital.create({
        name,
        email,
        phone,
        address,
        owner: userId
    })

    return { newHospital }

}

const getHospitalServices = async (userId) => {
    const hospitals = await Hospital.find({ owner: userId })
    if (hospitals.length === 0) {
        throw new APIError(404, "Hospitals not found")
    }
    return { hospitals }
}

const updateHospitalServices = async (data, hospitalId) => {
   
    // check the format of the provided _id
    if (!mongoose.Types.ObjectId.isValid(hospitalId)) {
        throw new APIError(400, "hospital not found")
    }

    // check the existance of the hospital
    const hospital = await Hospital.findById(hospitalId)

    if (!hospital) {
        throw new APIError(400, "Choose correct Hospital OR registered hospital first")
    }

    // extract the fields from the user to update
    const { email, phone, address } = data

    // create the updatedField objects

    const updatedFields = {}

    if(email !== undefined){
        updatedFields.email = email
    }

    if(phone !== undefined){
        updatedFields.phone = phone
    }

    if(address !== undefined)
        updatedFields.address = address

    if(Object.keys(updatedFields).length === 0){
        throw new APIError(400, "you haven't changed anything")
    }

    // find the hospital by id and update
    await Hospital.findByIdAndUpdate(
        hospitalId,
        {
            $set : updatedFields
        },
        { new : true, runValidators : true }
    )
    
}

export { createHospital, getHospitalServices, updateHospitalServices }