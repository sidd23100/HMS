import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const DBConnection = async() => {
    try{
        const  DBConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.info(`DB Connection Successfully`)
        // console.info(DBConnectionInstance)
    }
    catch(e){
        console.error(`DB Connection Failed ${e}`)
    }
}

export { DBConnection }