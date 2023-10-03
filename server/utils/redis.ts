import {Redis} from "ioredis"
require("dotenv").config();

const radisClient = () => {
    if (process.env.REDIS_URL) {
        console.log("Redis connected")
        return process.env.REDIS_URL
    }
  throw new Error("Redis not connected")
}

export const radis =new Redis(radisClient()) ;

