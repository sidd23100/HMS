import Router from 'express'
import { authorization } from '../Middleware/user.authoriazationmiddleware.js'
import { verifyToken } from '../Middleware/user.authmiddlware.js'
import { createHospitalController, deleteHospitalController, getHospitalController, updateHospitalController } from '../Controller/hospital.controller.js'

const hospitalRouter = Router()

hospitalRouter.route("/hospital/register").post(verifyToken, authorization('ADMIN'), createHospitalController)

hospitalRouter.route("/hospitals").get(verifyToken, authorization("ADMIN"), getHospitalController)

hospitalRouter.route("/hospital/update/:hospitalId").patch(verifyToken, authorization("ADMIN"), updateHospitalController)

hospitalRouter.route("/hospital/delete/:hospitalId").delete(verifyToken, authorization("ADMIN"), deleteHospitalController)

export { hospitalRouter }