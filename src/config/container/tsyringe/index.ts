import { container } from "tsyringe";

//controller
import { AuthControllerImpl } from "@/modules/auth/auth/api/controllers/impl/authControllerImpl";
import { AccountControllerImpl } from "@/modules/account/api/controllers/impl/accontControllerImpl";
import { CompanyControllerImpl } from "@/modules/company/company/api/controllers/impl/companyControllerImpl";
import { RequestsControllerImpl } from "@/modules/company/requests/api/controllers/impl/requestsControllerImpl";
import { MotoboyControllerImpl } from "@/modules/motoboy/api/controllers/impl/motoboyControllerImpl";

//repository
import { UserRepositoryImpl } from "@/modules/auth/user/database/repositories/impl/typeorm/repositories/UserRepositoryImpl";
import { AccountRepositoryImpl } from "@/modules/account/database/repositories/impl/typeorm/repositories/accountRepositoryImpl";
import { CompanyRepositoryImpl } from "@/modules/company/company/database/repositories/impl/typeorm/repositories/companyRepositoryImpl";
import { MotoboyRepositoryImpl } from "@/modules/motoboy/database/repositories/impl/typeorm/repositories/motoboyRepositoryImpl";
import { RequestsRepositoryImpl } from "@/modules/company/requests/database/repositories/impl/typeorm/repositories/requestsRepository";

//service
import { AuthServiceImpl } from "@/modules/auth/auth/business/services/impl/authServiceImpl";
import { UserServiceImpl } from "@/modules/auth/user/business/services/impl/userServiceImpl";
import { AccountServiceImpl } from "@/modules/account/business/services/impl/accountServiceImpl";
import { CompanyServiceImpl } from "@/modules/company/company/business/services/impl/companyServiceImpl";
import { MotoboyServiceImpl } from "@/modules/motoboy/business/services/impl/motoboyServiceImpl";
import { RequestsServiceImpl } from "@/modules/company/requests/business/services/impl/requestsServiceImpl";

//container controller
container.register( "AuthController", { useClass: AuthControllerImpl});
container.register("AccountController", { useClass: AccountControllerImpl});
container.register("CompanyController", { useClass: CompanyControllerImpl});
container.register("RequestsController", { useClass: RequestsControllerImpl});
container.register("MotoboyController", { useClass: MotoboyControllerImpl});


//container repository
container.register("UserRepository", { useClass: UserRepositoryImpl});
container.register("AccountRepository", { useClass: AccountRepositoryImpl});
container.register("CompanyRepository", { useClass: CompanyRepositoryImpl});
container.register("MotoboyRepository", { useClass: MotoboyRepositoryImpl});
container.register("RequestsRepository", { useClass: RequestsRepositoryImpl});


//container service
container.register("AuthService", { useClass: AuthServiceImpl});
container.register("UserService", { useClass: UserServiceImpl});
container.register("AccountService", { useClass: AccountServiceImpl});
container.register("CompanyService", { useClass: CompanyServiceImpl});
container.register("MotoboyService", { useClass: MotoboyServiceImpl});
container.register("RequestsService", { useClass: RequestsServiceImpl});