import { Company } from "../entities/company.entity";

import { CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO } from "@/modules/company/company/dtos/companyDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class CompanyRepositoryImpl
    extends BaseRepositoryImpl<CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO>{
        constructor(){
            super('id', Company)
        }
    }