// import mongoose from "mongoose";
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;
import mysql from 'mysql2/promise';

// const connectDB = mysql.createConnection({
//   host: 'localhost',
//   user: 'ITU', // Replace with your MySQL username
//   password: 'injifano@1234', // Replace with your MySQL password, or load it from .env
//   database: 'raba_website',
// });

// connectDB.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the MySQL database in db.js!');
// });
const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST, // Replace with your MySQL hostname
      user: process.env.DB_USER, // Replace with your MySQL username
      password: process.env.DB_PASSWORD, // Replace with your MySQL password, or load it from .env
      database: process.env.DB_NAME,
    });

    console.log('Connected to the MySQL database in db.js!');
    return connection; // Return the connection for use in other parts of your application
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err; // Rethrow the error to be handled elsewhere if needed
  }
};

export default connectDB;
