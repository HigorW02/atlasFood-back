import { BaseService } from "@/modules/base/BaseService";
import { RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO } from "../../dtos/RequestsDTO";

export interface RequestsService
    extends BaseService<RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO>{
        
    }