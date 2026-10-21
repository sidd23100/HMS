import Router from 'express'
import { authorization } from '../Middleware/user.authoriazationmiddleware.js'
import { verifyToken } from '../Middleware/user.authmiddlware.js'
import { createHospitalController, getHospitalController } from '../Controller/hospital.controller.js'

const hospitalRouter = Router()

hospitalRouter.route("/hospital/register").post(verifyToken, authorization('ADMIN'), createHospitalController)

hospitalRouter.route("/hospitals").get(verifyToken, authorization("ADMIN"), getHospitalController)

export { hospitalRouter }