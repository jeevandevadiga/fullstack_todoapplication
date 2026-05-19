import { set } from "mongoose";
import taskmodel from "../../models/user.list.js";

async function updatetask(req, res) {
  try {
    //getting the task from the frontend 
    const { updatetask } = req.body;

    //getting the id from the url (params)
    const id = req.params.id;

    //validating the id 
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    //updating the task using the id
    const updatedTask = await taskmodel.findByIdAndUpdate(
      id,
      { $set: { task: updatetask } },
      { returnDocument: "after" }, // return updated doc
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "No task with the given ID" });
    }

    res
      .status(200)
      .json({ message: "Updated successfully", data: updatedTask });
  } catch (error) {
    res.status(401).json({
      message: "failed in the update task filed",
      error: error.message,
    });
  }
}
export default updatetask;
