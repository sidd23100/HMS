import { Router } from 'express'
import { adminController, userLoginController } from '../Controller/user.controller.js'
import { validateEmail } from '../Middleware/uservalidation.middleware.js'
import { verifyToken } from '../Middleware/user.authmiddlware.js'

const router = Router()

// router.route("/users").get(verifyToken, getAllUsers)
router.route("/users/register").post(validateEmail, adminController)
router.route("/user/login").post(validateEmail,  userLoginController)

export  { router }

