import express from "express";

import {
  createTask,
  getAllTasks,
  getTaskById,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";
import userAuth from "../middleware/authUser.js";

const taskRouter = express.Router();


taskRouter.post("/",userAuth, createTask);
taskRouter.get("/", userAuth, getAllTasks);
taskRouter.get("/:id",userAuth, getTaskById);
taskRouter.delete("/:id", userAuth, deleteTask);
taskRouter.put("/:id",userAuth,updateTask);

export default taskRouter;
