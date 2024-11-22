import { Router } from "express";
import {
  createConsultation,
  getConsultations,
  updateConsultation,
  deleteConsultation,
} from "../controllers/consultation.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.use(authenticate);

router.post("/", createConsultation);
router.get("/", getConsultations);
router.put("/:id", updateConsultation);
router.delete("/:id", deleteConsultation);

export default router;
