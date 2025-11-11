import express, { Request, Response }  from "express";
import cors from "cors"
import axios from "axios";
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { UserModel } from "./db/UserModel.js";
import { Imagerouter } from "./Routes/ImageRoutes.js";
import { Userrouter } from "./Routes/UserRoutes.js";

const app = express()


app.use(express.json())
app.use(cors())


app.use("/api",Imagerouter)
app.use("/user",Userrouter)


async function main(){
    app.listen(3000,async ()=>{
        console.log("app is listening")
        await mongoose.connect('mongodb+srv://yash2k26:yash%402k26@cluster0.suffwcp.mongodb.net/saasai')
    })
}

main()