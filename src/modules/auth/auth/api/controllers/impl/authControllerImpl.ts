import { injectable, inject } from 'tsyringe';

import { Request, Response } from 'express';
import { AuthService } from '../../../business/services/AuthService';   
import { AuthController } from '@/modules/auth/auth/api/controllers/AuthController'


@injectable()
export class AuthControllerImpl  implements AuthController 
        {
    
    constructor(
        @inject('AuthService')
        private authService: AuthService
    ) {
    }

    public async signin(req: Request, res: Response): Promise<Response> {
        const auth = req.body;
        console.log(req.body);
        const signin = await this.authService.signin(auth);
        return res.json(signin);

    }

    public async signup(req: Request, res: Response): Promise<Response> {
        const auth = req.body;
        const signup = await this.authService.signup(auth);
        return res.json(signup);

    }
}