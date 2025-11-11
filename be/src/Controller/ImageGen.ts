import express, { NextFunction, Request, Response }  from "express";
import cors from "cors"
import axios from "axios";
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { UserModel } from "../db/UserModel.js";
import { Middleware } from "../Middleware/UserMiddleware.js";
import FormData from "form-data";
const JWT_KEY = process.env.JWT_KEY 

const app = express()
app.use(express.json());


app.use(Middleware)

export const ImageGen = async (req:Request,res:Response) => {
    try {
        const userId = req.userId
        const {prompt} = req.body

        const user = await UserModel.findById(userId)
        if(!user || !prompt){
           return res.status(400).json({
                success : false,
            })
        }

        if(user?.CreditBal === 0){
            return res.json({
                success : false , 
                message : "No Credits Left",
                creditBalance : user.CreditBal})
        }    

        const FORMDATA = new FormData()
        FORMDATA.append('prompt',prompt)

        const {data} = await axios.post("https://clipdrop-api.co/text-to-image/v1",FORMDATA, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API
            },
            responseType: 'arraybuffer'
        } )

        const base64Image = Buffer.from(data,'binary').toString(`base64`)
        const resultImage = `data:image/png;base64,${base64Image}`
        if(typeof user?.CreditBal === "number"){
            await UserModel.findByIdAndUpdate(userId , {CreditBal : user?.CreditBal-1})

            res.json({
                success : true,
                mssg:"Image generated",
                CreditsBalance : user?.CreditBal-1,
                resultImage : resultImage
            })
        }
        
        

    } catch (error) {
        res.status(404).json({
            success : false,
            mssg : error
        })
    }
    
    
}