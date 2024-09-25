
const jwt=require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    // const Authorization = req.headers['authorization'] || req.headers['Authorization'];
    console.log('Authorization Header:', Authorization); // Debugging output

    if (Authorization && Authorization.startsWith('Bearer ')) {
        const token = Authorization.split(' ')[1];
        jwt.verify(token, process.env.JWTKEY, (err, decoded) => {
            if (err) {
                console.log('Token Verification Error:', err); // Additional debugging
                return res.status(401).json({ message: "Unauthorized: Invalid token" });
            }
            req.user = decoded;
            console.log('Token Decoded:', decoded); // Additional debugging
            next();
        });
    } else {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
};


module.exports={authMiddleware};