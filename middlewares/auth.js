const { verifyToken, authorizeRoles } = require('../services/jwt');

/**
 * Auth middleware - verifies JWT
 */
exports.protect = verifyToken;

/**
 * Role-based access control
 */
exports.admin = authorizeRoles('admin');
exports.student = authorizeRoles('student', 'admin');
exports.faculty = authorizeRoles('faculty', 'admin');
exports.anyUser = authorizeRoles('admin', 'student', 'faculty');

