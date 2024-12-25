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

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Add the frontend URL here
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
  credentials: true
}));
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

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