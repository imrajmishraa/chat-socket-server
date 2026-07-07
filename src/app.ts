import express from "express";
import mongoose from "mongoose";
import connectDB from "./database/db.setup";

const app = express();

// Database connection middleware for serverless environment compatibility
app.use(async (req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    return next();
  }
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

// Error Middleware (Must be last)
import { errorHandler } from "./middlewares/error";
app.use(errorHandler);

export { app };
