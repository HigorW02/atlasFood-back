import { injectable, inject } from 'tsyringe';
import { AuthHelpers } from '@/config/hash/hash';

import { authDTO, tokenDTO } from '../../../dtos/authDTO';
import { AuthService } from '../authService';
import { UserService } from '@/modules/auth/user/business/services/userService';
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
            password: newPassword
        })

        const token = await this.signin({
            username: auth.username,
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