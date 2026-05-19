import taskmodel from "../../models/user.list.js";

//here need to write the code using the toogle method
async function updatestatus(req, res) {
  try {
    //getting the id from the params
    const id = req.params.id;

    //validating the id
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    //getting the details of the user so that based on the status i can change

    const taskdata = await taskmodel.findById(id);

    //if the task is not available
    /*  if (!taskdata) {
      return res.status(401).json({ message: "task not found" });
    }*/

    //if the task has the status pending

    if (taskdata.status == "pending") {
      const updatestatus = await taskmodel.findByIdAndUpdate(
        id,
        {
          $set: { status: "completed" },
        },
        { returnDocument: "after" },
      );

      res.status(200).json({
        message: "updated status successfully to completd",
        updatestatus,
      });
    }
    //if the task is in the completed state
    else {
      const updatestatus = await taskmodel.findByIdAndUpdate(
        id,
        {
          $set: { status: "pending" },
        },
        { returnDocument: "after" },
      );
      res.status(200).json({
        message: "updated status succesfully to pending",
        updatestatus,
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "failed in the upadtestatus file",
      error: error.message,
    });
  }
}

export default updatestatus;
