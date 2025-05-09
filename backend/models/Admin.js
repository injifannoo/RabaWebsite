import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Super Admin', 'Editor'], default: 'Editor' }
});

// Hash password before saving
AdminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
export default mongoose.model('Admin', AdminSchema);
