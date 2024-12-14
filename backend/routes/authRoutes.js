import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Admin from '../models/User.js';

const router = express.Router();

// Admin login
router.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`Attempting login with email: ${email}`);

  try {
    const admin = await Admin.findOne({ email });
    console.log(admin);  // Check if the admin was found

    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    console.log(`Password match: ${isMatch}`);

    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error('JWT_SECRET is not defined!');
      return res.status(500).json({ error: 'Internal server error: missing JWT_SECRET' });
    }

    const token = jwt.sign({ id: admin._id, role: admin.role }, jwtSecret, { expiresIn: '100d' });
    console.log(`Password match: ${token}`);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);  // Log the actual error
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
