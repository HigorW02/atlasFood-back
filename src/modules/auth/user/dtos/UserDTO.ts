export class UserDTO {
    id:string;
    username: string;
    email: string;
    password: string;
}

export type CreateUserDTO = Omit<UserDTO, 'id'>;
export type UpdateUserDTO = Partial<UserDTO>;