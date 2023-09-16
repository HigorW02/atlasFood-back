import { container } from "tsyringe";

//controller
import { AuthControllerImpl } from "@/modules/auth/auth/api/controllers/impl/authControllerImpl";

//repository
import { UserRepositoryImpl } from "@/modules/auth/user/database/repositories/impl/typeorm/repositories/UserRepositoryImpl";

//service
import { AuthServiceImpl } from "@/modules/auth/auth/business/services/impl/authServiceImpl";
import { UserServiceImpl } from "@/modules/auth/user/business/services/impl/userServiceImpl";

//container controller
container.register( "AuthController", { useClass: AuthControllerImpl})


//container repository
container.register("UserRepository", { useClass: UserRepositoryImpl})


//container service
container.register("AuthService", { useClass: AuthServiceImpl})
container.register("UserService", { useClass: UserServiceImpl})
