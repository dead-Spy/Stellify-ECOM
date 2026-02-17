import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected Successfully");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Database Connection Error: " + err);
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/ecom`);
  } catch (error) {
    console.log("Initial Database Connection Failed: " + error.message);
  }
};

export default connectDB;