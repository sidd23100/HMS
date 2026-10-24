import { createHospital, getHospitalServices, updateHospitalServices } from "../Services/hospital.services.js";
import { APIResponse } from "../utils/APIResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createHospitalController = asyncHandler(async(req, res) => {

    // console.log("hospital controller hit")

    //  console.log("Request body:", req.body);
    // console.log("Authenticated user:", req.user);

    const hospital = await createHospital(req.body, req.user.userId)

    res.status(201).json(
        new APIResponse(201, "hospital created", hospital)
    )
})

const getHospitalController = asyncHandler(async(req, res) => {
    const hospitals = await getHospitalServices(req.user.userId)
   
    res.status(200).json(
      new APIResponse(200, hospitals)
    )
})

const updateHospitalController = asyncHandler(async(req, res) => {
    const updatedHospital = await updateHospitalServices(req.body, req.params.hospitalId)

    res.status(200).json(
        new APIResponse(200, "update successfully", updatedHospital)
    )
})

export{ createHospitalController, getHospitalController, updateHospitalController }