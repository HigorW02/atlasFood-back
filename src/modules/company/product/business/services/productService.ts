import { BaseService } from "@/modules/base/BaseService";
import { ProductDTO, CreateProductDTO, UpdatedProductDTO } from "../../dtos/ProductDTO";

export interface ProductService
    extends BaseService<ProductDTO, CreateProductDTO,UpdatedProductDTO>{
        
    }