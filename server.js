import app from "./src/server/app.js";
import connection from "./src/database/connection.js";
import dotenv from "dotenv";
dotenv.config();

//creating the database
connection();

app.listen(3000, () => {
  console.log("server created  successfully");
});


