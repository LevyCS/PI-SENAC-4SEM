import express from "express";
import authRoutes from "./routes/auth.routes";
import consultationRoutes from "./routes/consultation.routes";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/consultations", consultationRoutes);

export default app;