export class MotoboyDTO {
    id: string;
    cnh: number;
    veiculo: string;   
}

export type CreateMotoboyDTO = Omit<MotoboyDTO, 'id'>
export type UpdatedMotoboyDTO = Partial<MotoboyDTO>