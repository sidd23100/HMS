import jwt from 'jsonwebtoken'
import { APIError } from '../utils/APIError.js'

const verifyToken = async (req, res, next) => {

    const authHeaders = req.headers['authorization']

    const token = authHeaders && authHeaders.split(' ')[1]

    if (!token) {
        throw new APIError(400, "You are not LoggedIn")
    }

    await jwt.verify(token, process.env.JWT_Secret_Key, (err, user) => {
        if (err) {
            return next(err)
        }

        req.user = user
        next()
    })

}

export { verifyToken }