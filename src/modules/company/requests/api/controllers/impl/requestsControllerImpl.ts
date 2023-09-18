import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";
import { RequestsService } from "../../../business/services/RequestsService";

import { RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO } from "../../../dtos/RequestsDTO";
import { inject, injectable } from "tsyringe";

@injectable()
export class RequestsControllerImpl
    extends BaseControllerImpl<RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO>{
        constructor(
            @inject('RequestsService')
            private requestsServices: RequestsService
        ){
            super(requestsServices  )
        }
    }