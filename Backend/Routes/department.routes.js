import { Router } from "express";
import { newDepartmentController } from "../Controller/department.controller.js";
import { verifyToken } from "../Middleware/user.authmiddlware.js";
import { authorization } from "../Middleware/user.authoriazationmiddleware.js";

const departmentRouter = Router()

// departmentRouter.route("/department").get(verifyToken, authorization("ADMIN"), getAllDepartment)

departmentRouter.route("/department/register").post(verifyToken, authorization("ADMIN"), newDepartmentController)

export { departmentRouter }