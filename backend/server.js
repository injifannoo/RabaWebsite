// const express from "express");
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js'
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors({
  origin: 'http://localhost:5173', // Add the frontend URL here
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
  credentials: true
}));
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MySQL database
(async () => {
  try {
    const connection = await connectDB(); // Await the promise-based connection
    console.log('Connected to the MySQL database in server.js!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);  // Exit the app if connection fails
  }
})();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/analytics/', analyticsRoutes)


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});