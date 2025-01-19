import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';  // Import MySQL User model

const router = express.Router();

// Admin login
router.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`Attempting login with email: ${email}`);
  
  try {
    // Attempt to find the admin by email
    console.log("Attempting to find admin with email:", email);
    
    const admin = await User.findByEmail(email);  // Ensure this method is correctly fetching the user from the DB
    if (!admin) {
      console.log(`Admin with email ${email} not found.`);
      return res.status(404).json({ message: 'Admin not found' });
    }
    console.log("Admin found:", admin);

    // Comparing the plain password with the hashed password
    console.log('Attempting to compare password...')
    
     console.log('Attempting to compare password:');
 console.log('Plain password:', password);
 console.log('Hashed password:', admin.password);
    const isMatch = await bcrypt.compare(password, admin.password);
    console.log('Password match result:', isMatch);



    if (!isMatch) {
      console.log(`Password mismatch for user: ${email}`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error('JWT_SECRET is not defined!');
      return res.status(500).json({ error: 'Internal server error: missing JWT_SECRET' });
    }

    const token = jwt.sign({ id: admin.id, role: admin.role }, jwtSecret, { expiresIn: '100d' });
    console.log('Token generated:', token);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);  // Log the actual error
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
