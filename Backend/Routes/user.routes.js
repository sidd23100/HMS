import { Router } from 'express'
import { userController, userLoginController } from '../Controller/user.controller.js'
import { validateEmail } from '../Middleware/uservalidation.middleware.js'
import { verifyToken } from '../Middleware/user.authmiddlware.js'
import { authorization } from '../Middleware/user.authoriazationmiddleware.js'

const router = Router()

// router.route("/users").get(verifyToken, getAllUsers)
router.route("/users/admin/register").post(validateEmail, userController)
router.route("/users/doctor/register").post(verifyToken, authorization("ADMIN"), validateEmail, userController)
router.route("/user/login").post(validateEmail,  userLoginController)

export  { router }

