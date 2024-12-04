require("dotenv").config();
const dotenv = require("dotenv");

const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
});

// User model
const User = mongoose.model("User", userSchema);

const createAdminUser = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    console.log("Connecting to MongoDB at:", mongoUri);

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if an admin user already exists
    const existingAdmin = await User.findOne({ email: "rabb@gmail.com" });
    if (existingAdmin) {
      console.log("Admin user already exists.");
      return;
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash("Raba@1", 10);

    // Create the admin user
    const adminUser = new User({
      email: "rabb@gmail.com",
      password: "Raba@1",
      role: "admin",
    });

    const savedUser = await adminUser.save();
    console.log("Admin user created successfully:", savedUser);
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    mongoose.connection.close();
  }
};

createAdminUser();
