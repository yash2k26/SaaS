import express from "express";
import { ImageGen } from "../Controller/ImageGen.js";
import { Middleware } from "../Middleware/UserMiddleware.js";

export const Imagerouter = express.Router()

Imagerouter.use(Middleware)

Imagerouter.post("/image-gen",Middleware,ImageGen)

