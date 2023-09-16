export class CompanyDTO{
    id: string;
    cnpj: string;
    nomeEmpresa: string;
    email: string;
    telefone: string;
    endereço: string;
}

export type CreateCompanyDTO = Omit<CompanyDTO, 'id'>
export type UpdatedCompanyDTO = Partial<CompanyDTO>