import { Requests } from "../entities/requests.entity";

import { RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO } from "@/modules/company/requests/dtos/requestsDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class RequestsRepositoryImpl
    extends BaseRepositoryImpl<RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO>{
        constructor(){
            super('codPedido', Requests)
        }
    }