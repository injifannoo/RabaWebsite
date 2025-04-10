import nodemailer from 'nodemailer';
import Contact from "../models/ContactModel.js";

// const submitContact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // Basic validation
//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Save to the database
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ message: "Contact form submitted successfully" });
//   } catch (error) {
//     console.error("Error saving contact form:", error);
//     res.status(500).json({ error: "Server error. Please try again later." });
//   }
// };
const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Email configuration
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    

       // Send confirmation email to your company
       const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Your company's email
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      };
  
      // await transporter.sendMail(mailOptions);
      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ error: "Failed to send email" });
        }
        console.log("Email sent: " + info.response);
      });
  
      res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  };


// Get all contact messages
const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find(); // Fetch all messages from the database
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Mark as resolved
const updateMessageStatus = async (req, res) => {
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
const replyToUser = async (req, res) => {
  const { email, replyMessage } = req.body;

  try {
    // Simulate sending an email
    console.log(`Email sent to ${email} with message: ${replyMessage}`);
    res.status(200).json({ message: 'Reply sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send reply' });
  }
};
export default {submitContact,getMessages, updateMessageStatus,replyToUser};

