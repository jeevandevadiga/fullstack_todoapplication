/*
in this you have to write the code to add the user tasks in to the database
while adding you have to add the user email also
*/
import jwt from "jsonwebtoken";
import taskmodel from "../../models/user.list.js";
async function addtask(req, res) {
  try {
    const { task, time } = req.body;

    //checking if the data are not empty

    if (!task || !time) {
      return res
        .status(401)
        .json({ message: "enter the task and deadline  field" });
    }

    //getting the email using the req.user from the authentification code
    const email = req.user.email;

    const list = await taskmodel.create({
      task,
      email: email,
      time,
      status: "pending",
    });

    res.status(200).json({ message: "added successfully", list });
  } catch (error) {
    res
      .status(401)
      .json({ message: "error in the task adding page", error: error.message });
  }
}
export default addtask;
