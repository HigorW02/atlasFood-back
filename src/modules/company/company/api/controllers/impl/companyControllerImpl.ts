import { CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO } from "../../../dtos/CompanyDTO";
import { CompanyService } from "../../../business/services/CompanyService";

import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";
import { inject, injectable } from "tsyringe";

@injectable()
export class CompanyControllerImpl 
    extends BaseControllerImpl<CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO>{
        constructor(
            @inject('CompanyService')
            private companyService: CompanyService
        ){
            super(companyService)
        }
    }