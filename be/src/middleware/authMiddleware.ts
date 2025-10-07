import { PrismaClient } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET ?? "";
const prisma = new PrismaClient();

export async function checkAuthentication(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ error: "Unauthorized" });

        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId }
        });
        if (!user) return;
        req.user = user;
        next();

    } catch (error) {
        return res.status(403).json({ error: "Invalid token" })
    }


}