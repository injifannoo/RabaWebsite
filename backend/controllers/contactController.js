const Contact = require("../models/ContactModel");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Get all contact messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.find(); // Fetch all messages from the database
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Mark as resolved
exports.updateMessageStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedMessage = await Contact.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update status' });
  }
};

// Reply to a user (example: email integration)
exports.replyToUser = async (req, res) => {
  const { email, replyMessage } = req.body;

  try {
    // Simulate sending an email
    console.log(`Email sent to ${email} with message: ${replyMessage}`);
    res.status(200).json({ message: 'Reply sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send reply' });
  }
};

