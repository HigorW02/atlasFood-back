import { Company } from "../entities/company.entity";

import { CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO } from "@/modules/company/company/dtos/CompanyDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class CompanyRepositoryImpl
    extends BaseRepositoryImpl<CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO>{
        constructor(){
            super('id', Company)
        }
    }