import { DBConnection } from "./DB/DBConnection.js"
import { app } from "./app.js"
import dotenv from "dotenv";


dotenv.config()
DBConnection()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.info(`Server Started On ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.error(`Connection Failed : ${error}`)
})