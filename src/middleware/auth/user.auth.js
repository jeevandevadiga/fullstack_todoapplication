/*
in this page i have to check the authentifaction of the user 
*/

import jwt from "jsonwebtoken";
async function checkauth(req, res, next) {
  try {
    const token = req.cookies.usertoken;

    if (!token) {
      return res.status(401).json({ message: "unauthorized user" });
    }

    const decoded = jwt.verify(
      token,
      "7633cc63c8724b4b2bb8617e777fa29fc96202cda8c3010ce680aefb68c1fcb5",
    );

    if(!decoded || !decoded.email){
      return res.status(401).json({message:"invalid token"});
    }

    req.user = decoded;
    next();
  } catch (error) {
    res
      .status(401)
      .json({
        message: "problem in the authentification page",
        error: error.message,
      });
  }
}

export default checkauth;
