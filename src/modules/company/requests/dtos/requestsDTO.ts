export class RequestsDTO{
    codPedido: number;
    status: boolean;
    dataPedido: Date;
}

export type CreateRequestsDTO = Omit<RequestsDTO, 'id'>
export type UpdatedRequestsDTO = Partial<RequestsDTO>