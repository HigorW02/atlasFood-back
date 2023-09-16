import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";
import { RequestsService } from "../../../business/services/requestsService";

import { RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO } from "../../../dtos/requestsDTO";
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