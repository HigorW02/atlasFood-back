import { AccountDTO, CreateAccountDTO, UpdatedAccountDTO } from "@/modules/account/dtos/AccountDTO";

import { BaseRepository } from "@/modules/base/BaseRepository";

export interface AccountRepository 
    extends BaseRepository<AccountDTO, CreateAccountDTO, UpdatedAccountDTO> {
    }