import express, { Request, Response }  from "express";
import cors from "cors"
import axios from "axios";
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { UserModel } from "../db/UserModel.js";
import { Middleware } from "../Middleware/UserMiddleware.js";
const JWT_KEY = process.env.JWT_KEY 

const app = express()


app.use(express.json())
app.use(cors())

export const signup = async (req:Request,res:Response) =>{
    try {
        const {username ,email , password } = req.body

        const hashedpass =  await bcrypt.hash(password,10)

        const userexist = await UserModel.findOne({email})
        if(userexist){
            res.status(400).json({
                mssg:"User already exist , Please log in"
            })
        }else{
            const user =  await UserModel.create({
                username:username,
                email : email,
                password : hashedpass,
            }) 
            const token = jwt.sign({id:user._id},JWT_KEY as string)

            res.json({
                mssg:`User created successfully : ${user}`,
                success : true,
                username : user.username,
                token : token

            })  
            
    }
    } catch (error) {
        console.log("internal error  : ", error)
    }

    


}


export const login = async (req:Request,res:Response)=>{
    const {email , password } = req.body
    try {
        const userexist = await UserModel.findOne({email})
        if (!userexist) return res.status(400).json({
            mssg:"User doesn't exist please sign up !"
        })
        const checkpass = await bcrypt.compare(password,userexist?.password as string)

        if(!checkpass){
            return res.status(400).json({
                mssg:"Invalid password"
            })
        }

       
        const token =  jwt.sign({id:userexist._id}, JWT_KEY as string)
        return res.json({
            success : true,
            username : userexist.username,
            token : token,
            creditBal : userexist.CreditBal
        })
            
    } catch (error) {
        console.log("internal error milgaya : ", error)
        return res.status(500).json({
            error
        })
    }
}


// export const UserCreds = async (req:Request,res:Response) =>{
//     try {
//         const userId = req.userId

//         const user = await UserModel.findById(userId)

//         if(user){
//             res.json({
//                 success : true,
//                 credits : user.CreditBal,
//                 username : user.username
//             })
//         }

//         console.log(user)

//     } catch (error) {
        
//     }
    
// }
