import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));
app.get("/api/", (req, res) => {
    res.send("Running!");
});
//routes
app.use("/api/auth", authRouter);
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});
//# sourceMappingURL=index.js.map