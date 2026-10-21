import { Hospital } from "../Models/hospital.model.js"
import { APIError } from "../utils/APIError.js"

const createHospital = async (data, userId) => {

    console.log("hospital services hit")

    const { name, email, phone, address } = data


      if (!name || !email || !phone || !address) {
        throw new APIError(400, "hospital details are required")
    }

    const existedHospital = await Hospital.findOne({ email : email })

    if(existedHospital){
        throw  new APIError(400, "Hospital already registered")
    }

    const  newHospital = await Hospital.create({
        name,
        email,
        phone,
        address,
        owner : userId
    })

    return{ newHospital }

}

export { createHospital }