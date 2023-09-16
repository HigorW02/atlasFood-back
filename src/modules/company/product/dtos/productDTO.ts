export class ProductDTO{
    codProduto: number;
    nomeProdutor: string;
    preço: number;
}

export type CreateProductDTO = Omit<ProductDTO, 'id'>
export type UpdatedProductDTO = Partial<ProductDTO> 