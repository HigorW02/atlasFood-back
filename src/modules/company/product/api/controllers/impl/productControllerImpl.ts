import { ProductDTO, CreateProductDTO, UpdatedProductDTO } from "../../../dtos/ProductDTO";
import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";

import { ProductService } from "../../../business/services/ProductService";
import { inject, injectable } from "tsyringe";

@injectable()
export class ProductCoontrollerImpl
    extends BaseControllerImpl<ProductDTO, CreateProductDTO, UpdatedProductDTO>{
        constructor(
            @inject('ProductService')
            private productService: ProductService
        ){
            super(productService)
        }
    }