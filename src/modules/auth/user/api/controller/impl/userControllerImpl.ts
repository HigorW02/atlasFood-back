import { injectable, inject } from 'tsyringe';

import { Request, Response } from 'express';

import { BaseControllerImpl } from '@/modules/base/BaseControllerImpl';
import { UserService } from '../../../business/services/UserService';

import { 
    CreateUserDTO, 
    UpdateUserDTO, 
    UserDTO 
} from '../../../dtos/UserDTO';

@injectable()
export class UserControllerImpl 
    extends BaseControllerImpl<UserDTO, CreateUserDTO, UpdateUserDTO> 
        {
    
    constructor(
        @inject('UserService')
        private userService: UserService
    ) {
        super(userService);
    }

    public async getUserByUsername(req: Request, res: Response): Promise<Response>{
        const { username } = req.params;

        try {
            const user = await this.userService.getUserByUsername(username);
            return res.json(user);
        } catch (error) {
            return res.status(404).json({ error: 'User not found'});
        }
    }
}