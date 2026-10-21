import { User } from "../Models/user.model.js"
import { APIError } from "../utils/APIError.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userLogin = async (data) => {
        const { email, password } = data

        const user = await User.findOne({ email : email })

        if (email !== user.email) {
            throw new APIError(400, "Invalid Email or Password")
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            throw new APIError(404, "Invalid Email OR Password")
        }

        const payload = { userId : user._id, name : user.name, email : user.email, role :user.role }
       
        const token = await jwt.sign(payload, process.env.JWT_Secret_key, {expiresIn : '15m'} )
        
        console.log(token)
        
        return { user, token}
}

export { userLogin }