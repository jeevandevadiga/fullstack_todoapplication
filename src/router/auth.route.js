import express from "express";
import userdetails from '../controller/auth/user.auth.js'
import checklogin from '../controller/auth/login.auth.js'
const authrouter = express.Router();

authrouter.post("/saveuser",userdetails);
authrouter.post("/userlogin",checklogin);


export default authrouter;