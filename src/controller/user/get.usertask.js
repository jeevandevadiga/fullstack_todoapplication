import taskmodel from "../../models/user.list.js";

async function getusertask(req, res) {
  try {
    const email = req.user.email;

    const data = await taskmodel.find({ email }).sort({createdAt: -1});

    if (data.length == 0) {
      return res.status(200).json({ message: "no task created yet" });
    }

    res.status(200).json({ message: "your tasks are ", data });
  } catch (error) {
    res.status(401).json({
      message: "error in the get the task page ",
      error: error.message,
    });
  }
}

export default getusertask;
