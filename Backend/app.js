import express from "express";

const app = express()

// for parsing incomming HTTP request with URL-encoded payloads
app.use(express.urlencoded({ extended : true }))


// parses incomming HTTP request with JSON payloads and populate the req.body
app.use(express.json())



// routes

import { router as UserRouter }from "./Routes/user.routes.js"

app.use("/api/v1.0/user", UserRouter)

export { app }
