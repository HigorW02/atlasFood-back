import { RequestsService } from "../requestsService";
import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO } from "../../../dtos/requestsDTO";

import { RequestsRepository } from "../../../database/repositories/requestsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class RequestsServiceImpl 
    extends BaseServiceImpl< RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO> implements RequestsService{
        constructor(
            @inject('RequestsRepository')
            private requestsRepository: RequestsRepository
        ){
            super(requestsRepository)
        }
    }