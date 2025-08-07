// backend/index.js
import express from "express";
import cors from "cors";
import "dotenv/config";
import job from "./lib/cron.js";

import authRoutes from "./routes/authRoutes.js";
import clothRoutes from "./routes/clothRoutes.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Start the cron job to keep the server awake
job.start();

// Middleware
app.use(express.json());
app.use(cors());

// A simple root route to respond to the cron job and prevent 404 errors
app.get("/", (req, res) => {
  res.status(200).send("Server is running!");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/cloths", clothRoutes);

// Start the server and connect to the database
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
