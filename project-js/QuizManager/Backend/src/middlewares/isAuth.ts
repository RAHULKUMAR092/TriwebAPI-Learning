import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
    userId: string;
    iat: number;
    exp: number;
}

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.get("Authorization");

        if (!authHeader) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Token not provided" });
        }

        let decodedToken: DecodedToken;
        try {
            decodedToken = jwt.verify(token, "secretmyverycertkey") as DecodedToken;
        } catch (error) {
            return res.status(401).json({ message: "Invalid token" });
        }

        if (!decodedToken) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        // Optionally, you can add the decoded token data to the request object
        (req as any).userId = decodedToken.userId;

        next();
    } catch (error) {
        // res.status(500).json({ message: "Server error" });
        next(error);
    }
};

export { isAuthenticated };
