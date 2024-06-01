const jwt = require('jsonwebtoken');


const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.sendStatus(403).json({message: "Error while verifying token!"});
        req.user = decoded;
        next();
    });
};

const authorizeAdmin = (req, res, next) => {
    const { userType } = req.user;      
    if (userType !== 'admin') {
        return res.sendStatus(403);
    }
    next();
};

module.exports = { authenticateToken, authorizeAdmin };
