import taskmodel from "../../models/user.list.js";

async function getcompletedtask(req, res) {
  try {
    const email = req.user.email;

    const data = await taskmodel.find({ email: email, status: "completed" });

    if (data.length == 0) {
      return res.status(200).json({ message: "no completed task" });
    }

    res.status(200).json({ message: "unfinished tasks are ", data });
  } catch (error) {
    res.status(401).json({
      message: "error in the getpending task page ",
      error: error.message,
    });
  }
}

export default getcompletedtask;
