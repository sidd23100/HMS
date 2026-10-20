import { Department } from "../Models/department.model.js"
import { APIError } from "../utils/APIError.js"

const newDepartment = async(data) => {
        const  { department, isActive, description } = data

        if(!department || typeof isActive !== "boolean" || !description){
            throw new APIError(400, `all fields are mandatory`)
        }

        const existedDepartment = await Department.findOne({ department : department})
        if(existedDepartment){
            throw new APIError(400, "Department already created")
        }

        const NewDepartment = await Department.create({
            department,
            isActive,
            description
        })

        return NewDepartment
   
}


export { newDepartment }