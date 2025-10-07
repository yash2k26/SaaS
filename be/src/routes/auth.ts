
import express from "express";
import jwt from "jsonwebtoken";

import bcrypt, { hash } from "bcrypt";
import { checkAuthentication } from "../middleware/authMiddleware.js";
import { PrismaClient } from "@prisma/client";


const router = express.Router();
const prisma = new PrismaClient()
const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET ?? "";

async function hashPassword(password: string) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPass = await bcrypt.hash(password, salt);
    return hashedPass;
  } catch (e) {
    console.log("Password hash error: " + e);
    return password;
  }
}


router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    const userId = user.id;
    const token = jwt.sign({ userId }, JWT_SECRET);
    res.cookie("token", token);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      }
    });
    if (!user) {
      return res.status(400).json({ error: "User Not Found" })
    }
    const orginalPass = user.password ?? "";
    const isPasswordValid = await bcrypt.compare(password, orginalPass);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid Password" });
    }

    const userId = user.id;
    const token = jwt.sign({ userId }, JWT_SECRET);
    res.cookie("token", token);
    return res.status(201).json({ message: "User Logged In" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/getuser", checkAuthentication, (req, res) => {
  res.json(req.user);
})


export default router;