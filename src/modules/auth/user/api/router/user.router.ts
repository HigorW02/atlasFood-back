import { Router } from 'express';
import { container } from 'tsyringe';

import baseRoutes from '@/modules/base/base.router';
import { UserController } from '@/modules/auth/user/api/controller/userController';

const userRouter = Router();
const userController:UserController = container.resolve('UserController');


userRouter.get('/username/:username', (req, res) => userController.getUserByUsername(req, res));

userRouter.use('/', baseRoutes(userController));

export default userRouter;