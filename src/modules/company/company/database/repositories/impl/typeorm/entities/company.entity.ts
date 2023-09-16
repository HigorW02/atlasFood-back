import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company{
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column("varchar", {unique: true, length: 11})
    cnpj: string

    @Column("varchar", {length: 150})
    nomeEmpresa: string

    @Column("varchar", {length: 255})
    email: string

    @Column("varchar", {length: 14})
    telefone: string

    @Column("varchar", {length: 255})
    endereço: string
}