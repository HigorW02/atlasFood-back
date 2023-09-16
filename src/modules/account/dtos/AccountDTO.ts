export class AccountDTO {
    id: string;
    cpf: string;
    nome: string;
    endereço: string;
    email: string;
    telefone: string;
    avaliação: number;
}

export type CreateAccountDTO = Omit<AccountDTO, 'id'>;
export type UpdatedAccountDTO = Partial<AccountDTO>;