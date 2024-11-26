const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactModel");

// POST: Create a new contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check if the contact with the same email already exists
    const existingContact = await Contact.findOne({email});

    if (existingContact) {
      return res.status(400).json({ error: "A message from this email already exists." });
    }

    // Create a new contact if no duplicate email is found
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
  
    if (error.code === 11000) {
      return res.status(400).json({ error: "A message from this email already exists." });
    }
  
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
  
});

module.exports = router;