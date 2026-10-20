import { newDepartment } from "../Services/department.service.js";
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const newDepartmentController = asyncHandler(async(req, res) =>{
        const department = await newDepartment(req.body)
        return res.status(201).json(
            new APIResponse(201, "Department Created", department)
        )
})

export { newDepartmentController }