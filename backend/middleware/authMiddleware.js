import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach user and decoded token to the request object
    req.user = user;
    req.tokenData = decoded;

    next();
  } catch (error) {
    console.error("Invalid Token:", error.message);
    res.status(401).json({ message: `Token error: ${error.message}` });
  }
};

const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Access denied: Insufficient permissions" });
  }
  next();
};

export default { authenticate, authorize };