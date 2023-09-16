import { MotoboyService } from "../motoboyService";
import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { MotoboyDTO, CreateMotoboyDTO, UpdatedMotoboyDTO } from "@/modules/motoboy/dtos/motoboyDTO";

import { MotoboyRepository } from "@/modules/motoboy/database/repositories/motoboyRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class MotoboyServiceImpl 
    extends BaseServiceImpl<MotoboyDTO, CreateMotoboyDTO, UpdatedMotoboyDTO> implements MotoboyService{
        constructor(@inject('MotoboyRepository')
        private motoboyRepository: MotoboyRepository
        ){
            super(motoboyRepository)
        }
        
    }