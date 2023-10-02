import { container } from "tsyringe";

//controller
import { AuthControllerImpl } from "@/modules/auth/auth/api/controllers/impl/AuthControllerImpl";
import { AccountControllerImpl } from "@/modules/account/api/controllers/impl/AccontControllerImpl";
import { CompanyControllerImpl } from "@/modules/company/company/api/controllers/impl/CompanyControllerImpl";
import { RequestsControllerImpl } from "@/modules/company/requests/api/controllers/impl/RequestsControllerImpl";
import { MotoboyControllerImpl } from "@/modules/motoboy/api/controllers/impl/MotoboyControllerImpl";
import { ProductCoontrollerImpl } from "@/modules/company/product/api/controllers/impl/ProductControllerImpl";
import { UserControllerImpl } from "@/modules/auth/user/api/controller/impl/userControllerImpl";

//repository
import { UserRepositoryImpl } from "@/modules/auth/user/database/repositories/impl/typeorm/repositories/UserRepositoryImpl";
import { AccountRepositoryImpl } from "@/modules/account/database/repositories/impl/typeorm/repositories/AccountRepositoryImpl";
import { CompanyRepositoryImpl } from "@/modules/company/company/database/repositories/impl/typeorm/repositories/CompanyRepositoryImpl";
import { MotoboyRepositoryImpl } from "@/modules/motoboy/database/repositories/impl/typeorm/repositories/MotoboyRepositoryImpl";
import { RequestsRepositoryImpl } from "@/modules/company/requests/database/repositories/impl/typeorm/repositories/RequestsRepository";
import { ProductRepositoryImpl } from "@/modules/company/product/database/repositories/impl/typeorm/repositories/ProductRepositoryImpl";

//service
import { AuthServiceImpl } from "@/modules/auth/auth/business/services/impl/AuthServiceImpl";
import { UserServiceImpl } from "@/modules/auth/user/business/services/impl/UserServiceImpl";
import { AccountServiceImpl } from "@/modules/account/business/services/impl/AccountServiceImpl";
import { CompanyServiceImpl } from "@/modules/company/company/business/services/impl/CompanyServiceImpl";
import { MotoboyServiceImpl } from "@/modules/motoboy/business/services/impl/MotoboyServiceImpl";
import { RequestsServiceImpl } from "@/modules/company/requests/business/services/impl/RequestsServiceImpl";
import { ProductServiceImpl } from "@/modules/company/product/business/services/impl/ProductServiceImpl";

//container controller
container.register( "AuthController", { useClass: AuthControllerImpl});
container.register("AccountController", { useClass: AccountControllerImpl});
container.register("CompanyController", { useClass: CompanyControllerImpl});
container.register("RequestsController", { useClass: RequestsControllerImpl});
container.register("MotoboyController", { useClass: MotoboyControllerImpl});
container.register("ProductController", { useClass: ProductCoontrollerImpl});
container.register("UserController", { useClass: UserControllerImpl})


//container repository
container.register("UserRepository", { useClass: UserRepositoryImpl});
container.register("AccountRepository", { useClass: AccountRepositoryImpl});
container.register("CompanyRepository", { useClass: CompanyRepositoryImpl});
container.register("MotoboyRepository", { useClass: MotoboyRepositoryImpl});
container.register("RequestsRepository", { useClass: RequestsRepositoryImpl});
container.register("ProductRepository", { useClass: ProductRepositoryImpl});



//container service
container.register("AuthService", { useClass: AuthServiceImpl});
container.register("UserService", { useClass: UserServiceImpl});
container.register("AccountService", { useClass: AccountServiceImpl});
container.register("CompanyService", { useClass: CompanyServiceImpl});
container.register("MotoboyService", { useClass: MotoboyServiceImpl});
container.register("RequestsService", { useClass: RequestsServiceImpl});
container.register("ProductService", { useClass: ProductServiceImpl});
