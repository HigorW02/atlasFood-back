import { Account } from "../entities/account.entity";

import { AccountDTO, CreateAccountDTO, UpdatedAccountDTO } from '@/modules/account/dtos/AccountDTO'

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class AccountRepositoryImpl
    extends BaseRepositoryImpl<AccountDTO, CreateAccountDTO, UpdatedAccountDTO> {
    constructor() {
        super('id', Account);
    }

    
}

