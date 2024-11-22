import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.util";
import { UserPayload } from "../@types/user";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = verifyToken(token);
        (req as any).user = payload
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
        return
    }
}
