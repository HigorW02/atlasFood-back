import { AccountService } from '@/modules/account/business/services/AccountService';
import { inject, injectable } from "tsyringe";
import { Request, Response } from 'express';

import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";

import { AccountDTO, CreateAccountDTO, UpdatedAccountDTO } from "../../../dtos/AccountDTO";
@injectable()
export class AccountControllerImpl
    extends BaseControllerImpl<AccountDTO, CreateAccountDTO, UpdatedAccountDTO> {

    constructor(
        @inject('AccountService')
        private accountService: AccountService
    ) {
        super(accountService);
    }
}