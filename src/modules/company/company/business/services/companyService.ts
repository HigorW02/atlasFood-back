import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";
import { CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO } from "../../dtos/CompanyDTO";

import { BaseService } from "@/modules/base/BaseService";

export interface CompanyService
    extends BaseService<CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO>{
        
    }