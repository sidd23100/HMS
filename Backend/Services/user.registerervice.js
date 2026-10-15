import { Hospital } from "../Models/hospital.model.js";
import { User } from "../Models/user.model.js";
import { APIError } from "../utils/APIError.js";
import bcrypt from 'bcrypt'

const adminRegisterService = async (data) => {
    const { name, email, phone, password, role, hospitalName, hospitalEmail, hospitalPhone, hospitalAddress } = data

    if (!name || !email || !phone || !password || !role) {
        throw new APIError(400, "All fields are required")
    }

    if (!hospitalName || !hospitalEmail || !hospitalPhone || !hospitalAddress) {
        throw new APIError(400, "hospital details are required")
    }

    const existedAdmin = await User.findOne({ email: email })
    const existedHospital = await Hospital.findOne({ hospitalEmail: hospitalEmail })

    if (existedAdmin) {
        throw new APIError(400, "Admin already registered")
    }

    if (existedHospital) {
        throw new APIError(400, "Hospital already registered")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = await User.create({
        name,
        email,
        phone,
        password: hashedPassword,
        role
    })

    const hospital = await Hospital.create({
        hospitalName,
        hospitalEmail,
        hospitalPhone,
        hospitalAddress
    })

    return { admin, hospital }

}

export { adminRegisterService }