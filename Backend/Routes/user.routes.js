import { Router } from 'express'
import { adminController, getAllUsers, userLoginController } from '../Controller/user.controller.js'
import { validateEmail } from '../Middleware/uservalidation.middleware.js'
import { verifyToken } from '../Middleware/user.authmiddlware.js'

const router = Router()

router.route("/").get(verifyToken, getAllUsers)
router.route("/register").post(validateEmail, adminController)

router.route("/login").post(validateEmail,  userLoginController)

export  { router }

