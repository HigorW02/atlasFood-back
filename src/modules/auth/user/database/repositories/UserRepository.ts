import { 
    UserDTO, 
    CreateUserDTO, 
    UpdateUserDTO 
} from "@/modules/auth/user/dtos/UserDTO"

import { BaseRepository } from '@/modules/base/BaseRepository';

export interface UserRepository 
    extends BaseRepository<UserDTO, CreateUserDTO, UpdateUserDTO> {
        getUserByUsername(username: string): Promise<UserDTO>;
        createUser(username: string,email: string, password: string): Promise<UserDTO>;
    }