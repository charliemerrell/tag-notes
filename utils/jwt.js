const jwt = require("jsonwebtoken");

function generateAccessToken(userId) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            { userId },
            process.env.JWTKEY || "shhhhhhhhh",
            { expiresIn: 1800 },
            (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            }
        );
    });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token === null) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWTKEY || "shhhhhhhhh", (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = { generateAccessToken, authenticateToken };
