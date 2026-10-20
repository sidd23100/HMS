import jwt from 'jsonwebtoken'
import { APIError } from '../utils/APIError.js'

const verifyToken = async (req, res, next) => {

    try {
        const authHeaders = req.headers['authorization']

        const token = authHeaders && authHeaders.split(' ')[1]

        if (!token) {
            res.status(400).json(
                next(new APIError(400, "you are not loggedIn")))
        }

        await jwt.verify(token, process.env.JWT_Secret_key, (err, user) => {
            if (err) {
                return next(err)
            }

            req.user = user
            next()
        })

    }
    catch (error) {
        next(`user authmiddleware error : ${error}`)
    }

}

export { verifyToken }