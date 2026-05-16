import mongoose from "mongoose";

async function connection() {
  try {
    await mongoose.connect("mongodb+srv://devadigajeevan41_db_user:JpCCbipjWDhvpAZG@cluster0.uzjfs4i.mongodb.net/todo");
    console.log("successfully database created ");
  } catch (error) {
    console.log("failed to connect to database ");
  }
}


export default connection;