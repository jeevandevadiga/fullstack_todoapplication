import taskmodel from "../../models/user.list.js";

async function deletealltask(req, res) {
  try {
    const email = req.user.email;

    const result = await taskmodel.deleteMany({ email });
    if (result.deletedCount == 0) {
      return res
        .status(200)
        .json({
          message: "no tasks to delete",
          deletedCount: result.deletedCount,
        });
    }

    res.status(200).json({ message: "successfully deleted all the tasks" });
  } catch (error) {
    res.status(401).json({
      message: "failed in the delete all task file",
      error: error.message,
    });
  }
}

export default deletealltask;
