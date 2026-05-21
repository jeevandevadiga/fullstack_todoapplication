import express from "express";
import userdetails from '../controller/auth/user.auth.js'
import checklogin from '../controller/auth/login.auth.js'
import logout from '../controller/auth/user.logout.js'
import checkauth from '../middleware/auth/user.auth.js'
import validationresult from '../middleware/validation/validation.result.js'
import uservalidation from '../middleware/validationrules/user.validation.js'


const authrouter = express.Router();

authrouter.post("/saveuser", uservalidation ,validationresult , userdetails);
authrouter.post("/userlogin",checklogin);
authrouter.post("/logout",logout);


export default authrouter;