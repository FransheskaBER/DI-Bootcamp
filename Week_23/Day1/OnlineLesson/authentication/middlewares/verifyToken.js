import jwt from "jsonwebtoken";
import "dotenv/config";

const secretCode = process.env.ACCESS_TOKEN_SECRET;

export const verifyToken = (req, res, next) => {
    const token = req.cookies.cookieName;

    if (!token) {
        res.status(401).json({ message: "Unauthorized user" });
        return;
    }

    jwt.verify(token, secretCode, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: "Forbidden Access" });
            return;
        }
        // console.log(decoded);
        req.user = decoded;
        // console.log(req);
        next();
    });
};
