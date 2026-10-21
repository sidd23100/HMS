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

export { createHospital, getHospitalServices }