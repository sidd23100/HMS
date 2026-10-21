import Router from 'express'
import { authorization } from '../Middleware/user.authoriazationmiddleware.js'
import { verifyToken } from '../Middleware/user.authmiddlware.js'
import { createHospitalController } from '../Controller/hospital.controller.js'

const hospitalRouter = Router()

hospitalRouter.route("/hospital/register").post(verifyToken, authorization('ADMIN'), createHospitalController)

export { hospitalRouter }