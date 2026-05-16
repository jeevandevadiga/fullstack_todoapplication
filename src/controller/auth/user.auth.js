import usermodel from "../../models/user.details.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userdetails = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //first thing is to hash the password
    const salttime = 10;
    const newpass = await bcrypt.hash(password, salttime);

    //saving the data into the database

    const data = await usermodel.create({
      username,
      email,
      password: newpass,
    });

    //creating the json token
    const token = jwt.sign(
      { id: data._id, email: data.email },
      "7633cc63c8724b4b2bb8617e777fa29fc96202cda8c3010ce680aefb68c1fcb5",
      { expiresIn: "1d" },
    );
    res.cookie("usertoken", token);
    res.status(200).json({ message: "done", username, email });
  } catch (error) {
    res.status(400).json({ message: "failed in userlogin page", error:error.message });
  }
};

export default userdetails;
