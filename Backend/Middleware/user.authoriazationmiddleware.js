import { APIError } from "../utils/APIError.js"

const authorization = (...allowedPerson) => {
    return (req, res, next) => {
        try{
            if(!req.user || !allowedPerson.includes(req.user.role)){
                return next(new APIError(403, "unauthorized person"))
            }
            next()
        }
        catch(error){
            next(`authorization middleware error : ${error}`)
        }
    }
}

export { authorization }