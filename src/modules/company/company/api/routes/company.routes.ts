import { Router } from "express";

import { container } from "tsyringe";

import baseRoutes from "@/modules/base/base.router";

const companyRouter = Router();

const companyController = container.resolve("CompanyController");

companyRouter.use("/", baseRoutes(companyController));

export default companyRouter;
