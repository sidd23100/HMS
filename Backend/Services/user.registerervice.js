import { Hospital } from "../Models/hospital.model.js";
import { User } from "../Models/user.model.js";
import { APIError } from "../utils/APIError.js";
import bcrypt from 'bcrypt'

const adminRegisterService = async (data) => {
    const { name, email, phone, password, role, hospitalName, hospitalEmail, hospitalPhone, hospitalAddress } = data

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

const userRegisterService = async (data) => {
   const { name, email, phone, password, role} = data

    if (!name || !email || !phone || !password || !role) {
        throw new APIError(400, "All fields are required")
    }

    const existedUser = await User.findOne({ email: email })

    if (existedUser) {
        throw new APIError(400, "Admin already registered")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        name,
        email,
        phone,
        password: hashedPassword,
        role
    })

    return { user }
 
}

export { adminRegisterService }