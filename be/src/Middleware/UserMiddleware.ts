import express, { NextFunction, Request, Response }  from "express";
import cors from "cors"
import axios from "axios";
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { UserModel } from "../db/UserModel.js";
const JWT_KEY = process.env.JWT_KEY 


export const Middleware = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const token = req.headers.authorization

        if(!token){
            return res.status(404).json({
                mssg:"Token doesn't exist , please sign up"
            })
        }

        const decoded = jwt.verify(token  ,JWT_KEY as string)

        if(typeof decoded == "object" && decoded != null){
            req.userId = decoded.id 
            
            
        }
        
        
        
        next()

    } catch (error) {
        return res.status(400).json({
            mssg:"Invalid Token"
        })
    }

}