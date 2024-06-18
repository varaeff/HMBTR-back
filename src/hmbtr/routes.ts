import { Router } from "express";
import { getFighters } from "./controllers";

const router = Router();

router.get("/fighters", getFighters);

export default router;
