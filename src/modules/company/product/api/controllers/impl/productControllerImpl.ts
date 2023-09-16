import { ProductDTO, CreateProductDTO, UpdatedProductDTO } from "../../../dtos/productDTO";
import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";

import { ProductService } from "../../../business/services/productService";
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