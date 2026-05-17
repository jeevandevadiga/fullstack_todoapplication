import mongoose from "mongoose";

const taskschema = mongoose.Schema(
  {
    email: { type: String, required: true },
    task: { type: String, required: true },
    time: { type: Date },
    status: { type: String, enum: ["pending" ,"completed"], default: "pending" },
  },
  { timestamps: true } 
);

const taskmodel = mongoose.model("task", taskschema);

export default taskmodel;
