USE raba_website;
CREATE TABLE IF NOT EXISTS blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,  -- Unique identifier for each blog
  title VARCHAR(255) NOT NULL,         -- Blog title, required
  content TEXT NOT NULL,               -- Blog content, required
  media VARCHAR(255),                  -- Path to media (image/video)
  tags VARCHAR(255) NOT NULL,          -- Tags, required
  author VARCHAR(255) NOT NULL,        -- Author name, required
  status ENUM('draft', 'published') DEFAULT 'draft', -- Status of the blog
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,   -- Creation timestamp
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Last updated timestamp
  scheduled_date DATETIME,             -- Date for scheduled publishing
  is_published BOOLEAN DEFAULT FALSE,  -- Whether the blog is published
  views INT DEFAULT 0,                 -- View count
  shares INT DEFAULT 0,                -- Share count
  comments JSON                        -- Comments stored as JSON array
);

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'editor', 'user') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT,
  status VARCHAR(50),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


