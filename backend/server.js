const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Add the frontend URL here
  methods: ['GET', 'POST'],
  credentials: true
}));
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/contact", require("./routes/contactRoutes"));
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});