import { Product } from "../entities/product.entity";
import { ProductDTO, CreateProductDTO, UpdatedProductDTO } from "@/modules/company/product/dtos/productDTO";
import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class ProductRepositoryImpl 
    extends BaseRepositoryImpl<ProductDTO, CreateProductDTO, UpdatedProductDTO>{
        constructor(){
            super('codProduto', Product)
        }
    }