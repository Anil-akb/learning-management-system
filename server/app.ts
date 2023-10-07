import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { ErrorMiddleware } from "./middleware/error";

import userRouter from "./routes/user.routes";

export const app = express();
require('dotenv').config();

//body parser
app.use(express.json({ limit: "50mb" }));

//cookie parser
app.use(cookieParser());

app.use(cors({
    origin:process.env.ORIGIN
}))



app.use("/api/v1",userRouter)

//testing api

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        message: "api working",
    })
 })


//unknown route error
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`)as any
    err.statusCode = 404;
    next(err)
})



app.use(ErrorMiddleware)