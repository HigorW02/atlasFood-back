import { BaseController } from '@/modules/base/BaseController';

import { Request, Response } from 'express';

export interface UserController extends BaseController {
    getUserByUsername(req: Request, res: Response): Promise<Response>;
}
