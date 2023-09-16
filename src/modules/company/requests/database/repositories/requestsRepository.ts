import { RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO } from "../../dtos/requestsDTO";
import { BaseRepository } from "@/modules/base/BaseRepository";

export interface RequestsRepository
    extends BaseRepository<RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO>{

    }