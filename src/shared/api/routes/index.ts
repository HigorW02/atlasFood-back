import { Router } from "express";

import authRouter from "@/modules/auth/auth/api/routes/auth.routes";
import accountRouter from "@/modules/account/api/routes/account.routes";
import companyRouter from "@/modules/company/company/api/routes/company.routes";
import motoboyRouter from "@/modules/motoboy/api/routes/motoboy.route";
import requestsRouter from "@/modules/company/requests/api/routes/requests.routes";

const router = Router();

router.use("/auth", authRouter);
router.use('/account', accountRouter);
router.use('/company', companyRouter);
router.use('/motoboy', motoboyRouter);
router.use('/requests', requestsRouter);

export default router;