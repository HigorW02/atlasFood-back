import { User } from "../entities/user.entity";

import { UserDTO, CreateUserDTO, UpdateUserDTO } from "@/modules/auth/user/dtos/userDTO";

import { BaseRepositoryImpl } from '@/modules/base/BaseRepositoryImpl';

export class UserRepositoryImpl 
    extends BaseRepositoryImpl<UserDTO, CreateUserDTO, UpdateUserDTO>{
    
    constructor() {
        super('id', User);
    }

     async getUserByUsername(username: string): Promise<UserDTO> {
        const user =  await this.typeormRepository.findOne({ 
            where: { username }
        });
        
        return user;

    }

    async createUser(username:string, password: string): Promise<UserDTO> {
        const user = this.typeormRepository.create({
            username, password
        });

        return await this.typeormRepository.save(user);
        
    }
}