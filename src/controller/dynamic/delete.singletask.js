import taskmodel from "../../models/user.list.js";

async function deletesingle(req, res) {
  try {
    const id = req.params.id;

    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }
      const deletetask = await taskmodel.deleteOne({ _id: id });

      if (deletetask.deletedCount === 0) {
        return res.status(200).json({ message: "no task to delete" });
      }

      res.status(200).json({ message: "deleted successfully" });
    
  } catch (error) {
    res
      .status(401)
      .json({ message: "failed in the deleteone file", error: error.message });
  }
}

export default deletesingle;
