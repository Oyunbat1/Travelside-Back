import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI as string;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};
