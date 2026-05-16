import express from "express"
import authrouter from '../router/auth.route.js'

const app = express();
app.use(express.json());
app.use(authrouter);

export default app;
