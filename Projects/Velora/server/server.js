import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🚀 Velora Backend is Running",
    });
});

// API Health Check
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "OK",
        timestamp: new Date(),
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});