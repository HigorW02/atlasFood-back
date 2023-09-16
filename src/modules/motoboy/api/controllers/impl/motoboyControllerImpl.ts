import { MotoboyService } from "@/modules/motoboy/business/services/motoboyService";

import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";

import { MotoboyDTO, CreateMotoboyDTO, UpdatedMotoboyDTO } from "@/modules/motoboy/dtos/motoboyDTO";
import { inject, injectable } from "tsyringe";

@injectable()
export class MotoboyControllerImpl
    extends BaseControllerImpl<MotoboyDTO, CreateMotoboyDTO, UpdatedMotoboyDTO>{
        constructor(
            @inject('MotoboyService')
            private motoboyService: MotoboyService
        ){
            super(motoboyService)
        }
    }