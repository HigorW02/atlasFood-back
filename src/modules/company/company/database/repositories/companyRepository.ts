import { CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO } from "../../dtos/companyDTO";

import { BaseRepository } from "@/modules/base/BaseRepository";

export interface CompanyRepository
    extends BaseRepository<CompanyDTO, CreateCompanyDTO, UpdatedCompanyDTO>{
        
    }