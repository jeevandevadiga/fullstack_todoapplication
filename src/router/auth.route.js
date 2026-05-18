import express from "express";
import userdetails from '../controller/auth/user.auth.js'
import checklogin from '../controller/auth/login.auth.js'
import logout from '../controller/auth/user.logout.js'
import checkauth from '../middleware/auth/user.auth.js'

const authrouter = express.Router();

authrouter.post("/saveuser",userdetails);
authrouter.post("/userlogin",checklogin);
authrouter.post("/logout",logout);


export default authrouter;