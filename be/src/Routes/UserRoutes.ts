import express from "express";
import { ImageGen } from "../Controller/ImageGen.js";
import { Middleware } from "../Middleware/UserMiddleware.js";
import { login, signup, } from "../Controller/UserController.js";

export const Userrouter = express.Router()


Userrouter.post("/signup",signup)
Userrouter.post("/login",login)


