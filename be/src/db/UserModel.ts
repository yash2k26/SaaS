import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username : {type: String , require:true },
    email : {type: String , require:true , unique:true},
    password : {type: String , require:true},
    CreditBal : {type : Number , default: 5}
})

export const UserModel = mongoose.model("user",UserSchema)