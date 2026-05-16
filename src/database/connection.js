import mongoose from "mongoose";

async function connection() {
  try {
    await mongoose.connect(process.env.DB);
    console.log("successfully database created ");
  } catch (error) {
    console.log("failed to connect to database ");
  }
}


export default connection;