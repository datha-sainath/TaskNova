import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";

dotenv.config(); 
const app = express();




app.use(cors({
  origin: [
    'https://task-manager-frontend-kappa-three.vercel.app',
   'https://task-manager-frontend-mediconnects-projects.vercel.app'
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connection successful!"))
  .catch((err) => console.log(err));


app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);


app.listen(7000, () => console.log("App running on port 7000"));
