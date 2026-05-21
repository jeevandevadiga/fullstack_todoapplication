//things that need to be here
/*
get the user name and password , validate check if the user exits or not if yes then check the password , then create the token 
*/

import usermodel from "../../models/user.details.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function checklogin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: "add email and password" });
    }
    const validuser = await usermodel.findOne({ email });

    //checking if the user is valid user or not
    if (!validuser) {
      return res.status(401).json({ message: "email not found", email });
    }

    //validating the password
    let passcheck = await bcrypt.compare(password, validuser.password);
    if (!passcheck) {
      return res.status(401).json({ message: "invalid password try again" });
    }

    //if it passess all the above then it is a valid user then create the cookie

    const token = jwt.sign(
      { id: validuser._id, email: validuser.email },
      "7633cc63c8724b4b2bb8617e777fa29fc96202cda8c3010ce680aefb68c1fcb5",
      { expiresIn: "1d" },
    );

    res.cookie("usertoken", token, {
      httpOnly: true,
      secure:false,
      samesight: "none",
      maxAge: 60 * 60 * 1000,
    });

    res
      .status(200)
      .json({ message: `${validuser.username} logged in successfully` });
  } catch (error) {
    res
      .status(401)
      .json({ message: "failed in the login page", error: error.message });
  }
}

export default checklogin;
