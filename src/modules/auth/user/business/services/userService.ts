import { BaseService } from '@/modules/base/BaseService';
import { 
    UserDTO,  
    CreateUserDTO, 
    UpdateUserDTO 
} from '../../dtos/userDTO';

export interface UserService 
    extends BaseService<UserDTO, CreateUserDTO, UpdateUserDTO> {
        getUserByUsername(username: string): Promise<UserDTO>;

        // getUserByUsername(username: string): Promise<UserDTO>;
        // createUser(username: string, password: string): Promise<UserDTO>;
}