import express from "express";

const app = express()

// for parsing incomming HTTP request with URL-encoded payloads
app.use(express.urlencoded({ extended : true }))


// parses incomming HTTP request with JSON payloads and populate the req.body
app.use(express.json())



// routes

import { router as UserRouter }from "./Routes/user.routes.js"
import { departmentRouter } from "./Routes/department.routes.js";

app.use("/api/v1", UserRouter)
app.use("/api/v1", departmentRouter)

export { app }
