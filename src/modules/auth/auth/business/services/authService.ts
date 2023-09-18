import { authDTO, tokenDTO } from "../../dtos/AuthDTO";

export interface AuthService {
    signin(auth: authDTO): Promise<tokenDTO>;
    signup(user: authDTO): Promise<tokenDTO>;
}