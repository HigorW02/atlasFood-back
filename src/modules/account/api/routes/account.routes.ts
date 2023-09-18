import { Router } from "express";
import { container } from "tsyringe";


import baseRoutes from '@/modules/base/base.router';
import { AccountController } from "@/modules/account/api/controllers/AccountController";

const accountRouter = Router();

const accountController: AccountController = container.resolve('AccountController');

accountRouter.use('/', baseRoutes(accountController));

export default accountRouter;