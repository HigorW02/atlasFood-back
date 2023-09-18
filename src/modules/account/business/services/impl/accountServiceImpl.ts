import { AccountService } from '@/modules/account/business/services/AccountService';
import { inject, injectable } from "tsyringe";

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { AccountDTO, CreateAccountDTO, UpdatedAccountDTO } from "@/modules/account/dtos/AccountDTO";

import { AccountRepository } from "@/modules/account/database/repositories/AccountRepository";

@injectable()
export class AccountServiceImpl 
    extends BaseServiceImpl<AccountDTO, CreateAccountDTO, UpdatedAccountDTO> implements AccountService {

        constructor(
            @inject('AccountRepository')
            private accountRepository: AccountRepository
        ){
            super(accountRepository)
        }

        
    }
