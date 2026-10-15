import { userLogin } from "../Services/user.authService.js"
import { adminRegisterService } from "../Services/user.registerervice.js"
import { APIResponse } from "../utils/APIResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const getAllUsers = (req, res) => {
    res.send("Welcome")
}

const adminController = asyncHandler(async (req, res) => {
    const adminData = await adminRegisterService(req.body)
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


export { getAllUsers, adminController, userLoginController }