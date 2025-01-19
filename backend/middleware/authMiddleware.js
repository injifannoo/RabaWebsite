// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const authenticate = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized: No token provided,", token });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Attach user and decoded token to the request object
//     req.user = user;
//     req.tokenData = decoded;

//     next();
//   } catch (error) {
//     console.error("Invalid Token:", error.message);
//     res.status(401).json({ message: `Token error: ${error.message}` });
//   }
// };

// const authorize = (roles) => (req, res, next) => {
//   if (!roles.includes(req.user.role)) {
//     return res.status(403).json({ message: "Access denied: Insufficient permissions" });
//   }
//   next();
// };

// export default { authenticate, authorize };


// // MYSQL
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
console.log('token:', token);
  // If no token is provided
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided", token });
  }

  try {
    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Log the decoded token to check if the id is available
    console.log('Decoded Token:', decoded);

    // Find the user by ID (ensure the id is correctly passed)
    console.log('Finding user by ID:', decoded.id);  // Log the ID to ensure it's correct
    const userId = parseInt(decoded.id, 10);  // Ensure the decoded ID is an integer
    console.log('parsed id: ',userId);
    const user = await User.findById(userId);  // Ensure id is cast to number if needed
console.log('User id: ',user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach user and decoded token to the request object
    req.user = user;
    req.tokenData = decoded;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // Log errors for debugging
    console.error("Invalid Token:", error.message);
    res.status(401).json({ message: `Token error: ${error.message}` });
  }
};

const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Access denied: Insufficient permissions" });
  }
  next(); // Proceed to the next middleware or route handler
};

export default { authenticate, authorize };
