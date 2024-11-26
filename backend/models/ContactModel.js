const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  message: { type: String, required: true },
},
{
  timestamps: true,
}
);
contactSchema.index({email: 1 }, { unique: true });
module.exports = mongoose.model("Contact", contactSchema);