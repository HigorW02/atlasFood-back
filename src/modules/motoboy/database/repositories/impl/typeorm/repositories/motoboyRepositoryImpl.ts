import { Motoboy } from "../entities/motoboy.entity";

import { MotoboyDTO, CreateMotoboyDTO, UpdatedMotoboyDTO } from "@/modules/motoboy/dtos/motoboyDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class MotoboyRepositoryImpl
    extends BaseRepositoryImpl<MotoboyDTO, CreateMotoboyDTO, UpdatedMotoboyDTO>{
        constructor(){
            super('id', Motoboy);
        }
    }