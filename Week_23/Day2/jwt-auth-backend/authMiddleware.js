import jwt from "jsonwebtoken";

// middleware function to check if user is authenticated
const verifyToken = (req, res, next) => {
    try {
        // get token from cookies
        const token = req.cookies.token;

        // if not token exists, user is not logged in
        if (!token) {
            res.status(401).json({ message: 'Access denied. No token provided.' });
            return;
        }

        // if the token is provided, then validated and verify with the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // if valid, we will attach the user info to the request object (so routes can use it)
        req.user = decoded;
        next();

    } catch (error) {
        // if token is invalid or expired
        console.error('Token verification error: ', error);
        res.status(401).json({ message: 'Invalid or expired token.' });
        return;
    }
};

export default verifyToken;