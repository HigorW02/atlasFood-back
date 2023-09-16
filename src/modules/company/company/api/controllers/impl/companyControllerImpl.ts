import { CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO } from "../../../dtos/companyDTO";
import { CompanyService } from "../../../business/services/companyService";

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