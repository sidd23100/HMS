import { createHospital } from "../Services/hospital.services.js";
import { APIResponse } from "../utils/APIResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createHospitalController = asyncHandler(async(req, res) => {

    console.log("hospital controller hit")

     console.log("Request body:", req.body);
    console.log("Authenticated user:", req.user);

    const hospital = await createHospital(req.body, req.user.userId)

    res.status(201).json(
        new APIResponse(201, "hospital created", hospital)
    )
})

export{ createHospitalController }