
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

dotenv.config();

// Create a connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'ITU', // Replace with your MySQL username
  password: 'injifano@1234', // Replace with your MySQL password, or load it from .env
  database: 'raba_website',
});

const createAdminUser = async () => {
  try {
    // Connect to the database
    db.connect((err) => {
      if (err) {
        console.error('Error connecting to the database:', err);
        return;
      }
      console.log('Connected to MySQL database');
    });

    // Check if an admin user already exists
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, ['raba123@gmail.com'], async (err, results) => {
      if (err) {
        console.error('Error checking if admin exists:', err);
        db.end();
        return;
      }

      if (results.length > 0) {
        console.log('Admin user already exists.');
        db.end();
        return;
      }

      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash('Raba@123', 5);

      // Insert the admin user if they don't exist
      const insertQuery = `INSERT INTO users (email, password, role) 
                           VALUES ('raba123@gmail.com', ?, 'admin')`;

      db.query(insertQuery, [hashedPassword], (err, result) => {
        if (err) {
          console.error('Error creating admin user:', err);
        } else {
          console.log('Admin user created successfully:', result);
        }
        db.end(); // Close the connection after the query is finished
      });
    });
  } catch (error) {
    console.error('Error creating admin user:', error);
    db.end();
  }
};

createAdminUser();
