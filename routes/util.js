const jwt = require('jsonwebtoken');
const secretKey = "+iPZslzvZ$tyr+9v";

module.exports = secured = (req, res, next) => {
    const token = req.header('authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: true, message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = JSON.parse(decoded.data);
        next();
    } catch (error) {
        res.status(401).json({error: true, message: 'Invalid token.' });
    }
};