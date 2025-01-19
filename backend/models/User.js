// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['admin', 'editor', 'user'], default: 'user' }, // Role-based field
// });

// // Hash password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// export default mongoose.model('User', userSchema);


// MysQL

import connectDB from '../config/db.js'; // MySQL connection
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const User = {
  // Create a new user (register)
  async create(userData) {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const query = 'INSERT INTO users (email, password, role) VALUES (?, ?, ?)';
      const values = [userData.email, hashedPassword, userData.role || 'user'];

      const [results] = await db.promise().query(query, values);
      return { id: results.insertId, ...userData, password: hashedPassword };
    } catch (err) {
      throw new Error('Error creating user: ' + err.message);
    }
  },

  // Find user by ID
  // async findById(id) {
  //   try {
  //     const query = 'SELECT * FROM users WHERE id = ?';
  //     const [results] = await db.promise().query(query, [id]);
  //     return results[0]; // Return the first user found
  //   } catch (err) {
  //     throw new Error('Error finding user by ID: ' + err.message);
  //   }
  // },
// In User.js (findById method)

async findById(id) {
  try {
    const db = await connectDB(); // Create a connection for this query
    const query = 'SELECT * FROM users WHERE id = ?';
    const [results] = await db.query(query, [id]); // Use query directly, no promise() needed
    console.log('Query Results:', results); // Log results to check returned data
    return results[0]; // Return the first user found or null
  } catch (err) {
    console.error('Error finding user by ID:', err.message);
    throw new Error('Error finding user by ID: ' + err.message);
  }
},

  // Find user by email (for login)
  async findByEmail(email) {
    try {
      const db = await connectDB(); // Create a connection for this query
      const query = 'SELECT * FROM users WHERE email = ?';
      const [results] = await db.query(query, [email]);  // Log the results to check what is being returned
      return results[0]; // Return the first user found
    } catch (err) {
      throw new Error('Error finding user by email: ' + err.message);
    }
  },
 
  // Validate user password
  async validatePassword(userPassword, inputPassword) {
    try {
      return await bcrypt.compare(inputPassword, userPassword);
    } catch (err) {
      throw new Error('Error validating password: ' + err.message);
    }
  },

  // Generate JWT token for authenticated user
  // generateAuthToken(user) {
  //   try {
  //     const payload = { id: user.id, email: user.email, role: user.role };
  //     return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION || '1h' });
  //   } catch (err) {
  //     throw new Error('Error generating token: ' + err.message);
  //   }
  // }
  generateAuthToken(user) {
    try {
      const payload = { id: user.id, email: user.email, role: user.role };

      console.log('Token Payload:', payload);  // Log the payload to ensure it's correct
      return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION || '1h' });
    } catch (err) {
      console.error('Error generating token:', err.message);
      throw new Error('Error generating token: ' + err.message);
    }
  },
};

export default User;
