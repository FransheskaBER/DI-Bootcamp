import jwt from "jsonwebtoken";

export default function requireAuth(req, res, next) {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = payload.userId;
        next();
    } catch {
        return res.status(401).json({ message: "Invallid or expired token" })
    }
}