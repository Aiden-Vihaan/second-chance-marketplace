import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

// Load environment variables
dotenv.config();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

// Start Server
const server = app.listen(PORT, () => {
  console.log(`
=================================================
🚀 Second Chance Marketplace Backend Started
🌐 Environment : ${process.env.NODE_ENV}
📡 Port        : ${PORT}
=================================================
  `);
});

/*
|--------------------------------------------------------------------------
| Graceful Shutdown
|--------------------------------------------------------------------------
*/

// Handle unhandled promise rejections
process.on("unhandledRejection", (error) => {
  console.error("❌ Unhandled Rejection:", error.message);

  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error.message);

  process.exit(1);
});

// Handle termination signals
process.on("SIGTERM", () => {
  console.log("⚠️ SIGTERM received. Shutting down gracefully...");

  server.close(() => {
    console.log("✅ Server closed.");
  });
});

process.on("SIGINT", () => {
  console.log("\n⚠️ SIGINT received. Shutting down gracefully...");

  server.close(() => {
    console.log("✅ Server closed.");
    process.exit(0);
  });
});
