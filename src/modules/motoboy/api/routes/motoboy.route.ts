import { Router } from "express";
import { container } from "tsyringe";

import baseRoutes from "@/modules/base/base.router";

const motoboyRouter = Router();
const MotoboyController = container.resolve("MotoboyController");

motoboyRouter.use("/", baseRoutes(MotoboyController));

export default motoboyRouter;
