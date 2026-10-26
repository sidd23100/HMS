import { userLogin } from "../Services/user.loginService.js"
import { userRegistrationServices } from "../Services/user.registerervice.js"
import { APIResponse } from "../utils/APIResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const userController = asyncHandler(async (req, res) => {
    const adminData = await userRegistrationServices(req.body)
    res.status(201).json(
        new APIResponse(201, "Success", adminData)
    )
})


const userLoginController = asyncHandler(async (req, res) => {
    const user = await userLogin(req.body)
    res.status(200).json(
        new APIResponse(200, "user logged in", user.name)
    )
})


export { userController, userLoginController }