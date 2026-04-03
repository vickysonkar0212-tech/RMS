const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

/**
 * Generate JWT token
 * @param {string|ObjectId} userId - User ID
 * @param {string} role - User role
 * @param {string} expiresIn - Token expiry (default 7d)
 * @returns {string} JWT token
 */
const generateToken = (userId, role, expiresIn = JWT_EXPIRES_IN) => {
  return jwt.sign(
    { 
      sub: userId,  // Standard claim for subject
      role 
    }, 
    JWT_SECRET, 
    { expiresIn }
  );
};

/**
 * Verify JWT middleware
 */
const verifyToken = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token || !token.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access token required'
      });
    }

    token = token.split(' ')[1]; // Remove 'Bearer '

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token format'
      });
    }

    const decoded = await promisify(jwt.verify)(token, JWT_SECRET);

    req.user = decoded; // { sub: userId, role }
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired'
      });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * Verify token and check roles
 */
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Role ${req.user?.role} not authorized for this action`
      });
    }
    next();
  };
};

module.exports = {
  generateToken,
  verifyToken,
  authorizeRoles
};
