import { CompanyService } from "../CompanyService";
import { CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO } from "../../../dtos/CompanyDTO";

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { CompanyRepository } from "../../../database/repositories/CompanyRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CompanyServiceImpl
    extends BaseServiceImpl<CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO> implements CompanyService{
        constructor(
            @inject('CompanyRepository')
            private companyRepository: CompanyRepository    
        ){
            super(companyRepository)
        }
    }