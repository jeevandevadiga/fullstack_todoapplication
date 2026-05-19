import express from "express"
import authrouter from '../router/auth.route.js'
import userrouter from '../router/user.route.js'
import dynamicrouter from '../router/dynamic.route.js'
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(authrouter);
app.use(userrouter);
app.use(dynamicrouter);

export default app;
