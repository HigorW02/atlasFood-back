import { BaseService } from "@/modules/base/BaseService";

import { AccountDTO, CreateAccountDTO, UpdatedAccountDTO } from "@/modules/account/dtos/AccountDTO";

export interface AccountService 
    extends BaseService<AccountDTO, CreateAccountDTO, UpdatedAccountDTO>{
    }