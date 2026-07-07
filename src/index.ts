import { app } from "./app";
import connectDB from "./database/db.setup";

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

if (!process.env.PORT || !process.env.HOST || !process.env.MONGODB_URI) {
  throw new Error("⚠️Missing required environment variables.");
}

if (!process.env.VERCEL) {
  connectDB().catch((err) => {
    console.log("⁉️MongoDB connection error", err);
  });

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}

export default app;

// Global promise rejection and uncaught exception handlers
process.on("unhandledRejection", (reason, promise) => {
  console.error("⁉️ UNHANDLED REJECTION at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("⁉️ UNCAUGHT EXCEPTION thrown:", error);
  process.exit(1);
});
