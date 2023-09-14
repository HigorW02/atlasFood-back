import { authDTO, tokenDTO } from "../../dtos/authDTO";

export interface AuthService {
    signin(auth: authDTO): Promise<tokenDTO>;
    signup(user: authDTO): Promise<tokenDTO>;
}