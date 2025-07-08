
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  
  title: { type: String, required: true },
  
  description: { type: String, default: "" }, 
  
  status: { 
    type: String, 
    enum: ["pending", "in-progress", "completed"], 
    default: "pending" 
  },
  
  dueDate: { type: Date }, 
  
  priority: { 
    type: String, 
    enum: ["Low", "Medium", "High"], 
    default: "medium" 
  }, 
  
  createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
