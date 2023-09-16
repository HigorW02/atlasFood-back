import { MotoboyDTO, CreateMotoboyDTO, UpdatedMotoboyDTO } from "../../dtos/motoboyDTO";
import { BaseRepository } from "@/modules/base/BaseRepository";

export interface MotoboyRepository
    extends BaseRepository<MotoboyDTO, CreateMotoboyDTO, UpdatedMotoboyDTO>{
        
    }