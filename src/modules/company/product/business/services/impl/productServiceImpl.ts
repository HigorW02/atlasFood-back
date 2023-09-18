import { ProductDTO, CreateProductDTO, UpdatedProductDTO } from "../../../dtos/ProductDTO";
import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { ProductRepository } from "../../../database/repositories/ProductRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ProductServiceImpl
    extends BaseServiceImpl<ProductDTO, CreateProductDTO, UpdatedProductDTO>{
        constructor(
            @inject('ProductRepository')
            private productRepository: ProductRepository
        ){
            super(productRepository)
        }
    }