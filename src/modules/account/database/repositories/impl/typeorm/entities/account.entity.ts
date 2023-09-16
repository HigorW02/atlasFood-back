import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("varchar", {unique:true , length: 14})
    cpf: string

    @Column("varchar", {length: 255})
    nome: string

    @Column("varchar", {length: 255})
    endereço: string

    @Column("varchar", {length: 255})
    email: string

    @Column("varchar", {length: 14})
    telefone: string

    @Column({})
    avaliação: number

}