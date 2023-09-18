import { Router } from "express";
import { container } from "tsyringe";

import baseRoutes from "@/modules/base/base.router";
import { RequestsController } from "../controllers/RequestsController";

const requestsRouter = Router()
const requestsController : RequestsController = container.resolve('RequestsController')

requestsRouter.use('/', baseRoutes(requestsController))

export default requestsRouter;