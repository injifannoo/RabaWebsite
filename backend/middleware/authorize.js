const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authorize = (requiredRoles) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user || !requiredRoles.includes(user.role)) {
      return res.status(403).json({ message: 'Access Denied' });
    }

    req.user = user; // Attach user to request
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authorize;
