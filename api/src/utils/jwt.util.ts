import jwt from "jsonwebtoken";
import { UserPayload } from "../@types/user";

const SECRET = "0m7xs9uC9VUa9YnwKYV9cN4cmxHj1oeC";

export function generateToken(userId: string) {
  return jwt.sign({ userId }, SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}
