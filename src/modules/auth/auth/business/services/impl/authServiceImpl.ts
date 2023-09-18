import { injectable, inject } from 'tsyringe';
import { AuthHelpers } from '@/config/hash/hash';

import { authDTO, tokenDTO } from '../../../dtos/AuthDTO';
import { AuthService } from '../AuthService';
import { UserService } from '@/modules/auth/user/business/services/UserService';
import { sign } from 'jsonwebtoken';

@injectable()
export class AuthServiceImpl implements AuthService {

    constructor(
        @inject('UserService')
        private userService: UserService
    ) { }


    async signup(auth: authDTO): Promise<tokenDTO> {
        const userExists = await this.userService.getUserByUsername(auth.username);

        if (userExists) {
            throw new Error("this user already exists");
        }

        const newPassword = await AuthHelpers.hash(auth.password)

        const user = await this.userService.createItem({
            username: auth.username,
            email: auth.email,
            password: newPassword
        })

        const token = await this.signin({
            username: auth.username,
            email: auth.email,
            password: auth.password
            
        });


        return token;
    }

    async signin(auth: authDTO): Promise<tokenDTO> {
        const user = await this.userService.getUserByUsername(auth.username);
        if (!user || ! await AuthHelpers.verify(auth.password, user.password)) {
            throw new Error("username or password doesn't match");
        }

        const token = sign({}, process.env.TK_SECRET, {
            subject: user.id,
            expiresIn: '1d'
        });

        return {
            token
        }
    }


}