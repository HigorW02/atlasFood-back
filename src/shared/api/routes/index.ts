import { Router } from "express";

import authRouter from "@/modules/auth/auth/api/routes/auth.routes";

const router = Router();

router.use("/auth", authRouter);

export default router;