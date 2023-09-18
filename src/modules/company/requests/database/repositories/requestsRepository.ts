import { RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO } from "../../dtos/RequestsDTO";
import { BaseRepository } from "@/modules/base/BaseRepository";

export interface RequestsRepository
    extends BaseRepository<RequestsDTO, CreateRequestsDTO, UpdatedRequestsDTO>{

    }