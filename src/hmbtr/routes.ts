import { Router } from "express";
import { getFighters, getFighter, addFighter } from "./controllers";

const router = Router();

router.get("/fighters", getFighters);
router.get("/fighter/:id", getFighter);

router.post("/fighters", addFighter);

export default router;
