import { injectable, inject } from 'tsyringe';


import { BaseServiceImpl } from '@/modules/base/BaseServiceImpl';
import { UserRepository } from '../../../database/repositories/UserRepository';

import {
    UserDTO,
    CreateUserDTO,
    UpdateUserDTO
} from '../../../dtos/userDTO';

@injectable()
export class UserServiceImpl
    extends BaseServiceImpl<UserDTO, CreateUserDTO, UpdateUserDTO>   {

    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository
    ) {
        super(userRepository);
    }
    async getUserByUsername(username: string): Promise<UserDTO> {
        return this.userRepository.getUserByUsername(username);
    }
    }   