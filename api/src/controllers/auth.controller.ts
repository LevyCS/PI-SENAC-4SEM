import { Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.util";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string().min(6),
});

export async function register(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, phone, password } = registerSchema.parse(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, phone, password: hashedPassword },
    });

    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function login(req: Request, res: Response) {
    const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    });

    try {
        const { email, password } = loginSchema.parse(req.body);

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(401).json({ error: "Invalid credentials" });
            return
        }

        const token = generateToken(user.id);
        res.json({ token });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}
