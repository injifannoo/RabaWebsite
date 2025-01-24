// import mongoose from "mongoose";

// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique:true },
//   message: { type: String, required: true },
//   status: { type: String, enum: ['draft', 'resolved'], default: 'draft' },

// },
// {
//   timestamps: true,
// }
// );
// contactSchema.index({email: 1 }, { unique: true });
// export default mongoose.model("Contact", contactSchema);
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js"; // Import the Sequelize instance

const Contact = sequelize.define(
  "Contact",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("draft", "resolved"),
      defaultValue: "draft",
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

export default Contact;
