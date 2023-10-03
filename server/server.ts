import connectDB from "./utils/db";
import { app } from "./app";
require ("dotenv").config()

//create server
app.listen(process.env.PORT, () => {
    
    console.log(`server is connect ${process.env.PORT}`)
    connectDB()
})