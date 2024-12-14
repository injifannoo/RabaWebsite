import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  message: { type: String, required: true },
  status: { type: String, enum: ['draft', 'resolved'], default: 'draft' },

},
{
  timestamps: true,
}
);
contactSchema.index({email: 1 }, { unique: true });
export default mongoose.model("Contact", contactSchema);