import { BaseService } from "@/modules/base/BaseService";
import { MotoboyDTO, CreateMotoboyDTO, UpdatedMotoboyDTO } from "../../dtos/motoboyDTO";

export interface MotoboyService 
    extends BaseService<MotoboyDTO, CreateMotoboyDTO, UpdatedMotoboyDTO>{
        
    }