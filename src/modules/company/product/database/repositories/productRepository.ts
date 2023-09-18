import { ProductDTO, CreateProductDTO, UpdatedProductDTO } from "../../dtos/ProductDTO";
import { BaseRepository } from "@/modules/base/BaseRepository";

export interface ProductRepository
    extends BaseRepository<ProductDTO, CreateProductDTO, UpdatedProductDTO>{
        
    }