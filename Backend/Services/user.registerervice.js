import { Hospital } from "../Models/hospital.model.js";
import { User } from "../Models/user.model.js";
import { APIError } from "../utils/APIError.js";
import bcrypt from 'bcrypt'

const userRegistrationServices = async (data) => {
    const { name, email, phone, password, role } = data

    if (!name || !email || !phone || !password || !role) {
        throw new APIError(400, "All fields are required")
    }

    const existedAdmin = await User.findOne({ email: email })

    if (existedAdmin) {
        throw new APIError(400, "Admin already registered")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = await User.create({
        name,
        email,
        phone,
        password: hashedPassword,
        role
    })

    return { admin }

}

export { userRegistrationServices }