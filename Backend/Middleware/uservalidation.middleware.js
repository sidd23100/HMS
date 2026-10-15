/* 
regEx - Regular Expresion is a special sequence of characters that forms a search pattern used to find, match, extract or replace text within string
syntax - 
            start with /^
                locat part - [a-zA-Z0-9.+-]
                domain - @[a-zA-Z0-9.-]
                top level domain - \.[a-zA-Z]
                {2,}
            Ends With    $/
*/

import { APIError } from "../utils/APIError.js"

function validateEmail(req, res, next){
    
    const emailRegEx = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const { email } = req.body

    if(typeof email !== "string" || !email.trim()){
        return next(
            new APIError(400, "Email is required OR must be a string")
        )
    }

    const senitizedEmail = email.trim()

    if(!emailRegEx.test(senitizedEmail)){
        return next(
            new APIError(400, "please provide a valid email")
        )
    }

    req.body.email = senitizedEmail

    next()

}

export { validateEmail }