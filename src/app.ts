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

// connection checkup
app.get("/", (req, res) => {
  res.send("Hello");
});

// import routes
import healthzRouter from "./routes/healthz/healthz.route";

// managed routes
app.use("/api/v1/", healthzRouter);

// Error Middleware (Must be last)
import { errorHandler } from "./middlewares/error";
app.use(errorHandler);

export { app };
