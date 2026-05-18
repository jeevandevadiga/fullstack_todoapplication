import taskmodel from "../../models/user.list.js";

async function getpendingtask(req, res) {
  try {
    const email = req.user.email;

    const data = await taskmodel.find({ email: email, status:"pending" });

    if (data.length == 0) {
      return res.status(200).json({ message: "no unfinished task" });
    }

    res.status(200).json({ message: "unfinished tasks are ", data });
  } catch (error) {
    res
      .status(401)
      .json({
        message: "error in the getpending task page ",
        error: error.message,
      });
  }
}

export default getpendingtask;
