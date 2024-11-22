import { Request } from "express";

type UserPayload = {
    userId: string
};

declare global {
  namespace Express {
    interface Request {
      user: UserPayload
    }
  }
}
