import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants/constants";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstances = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      `✅ MongoDB connected successfully! DB_HOST = ${connectionInstances.connection.host}`,
    );
  } catch (error) {
    console.log(`⁉️⚠️ MongoDB connection error`, error);
    process.exit(1);
  }
};

export default connectDB;
