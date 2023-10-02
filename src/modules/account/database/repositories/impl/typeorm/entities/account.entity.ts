import { Requests } from "@/modules/company/requests/database/repositories/impl/typeorm/entities/requests.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Requests, Requests => Requests.Account)
    @JoinColumn()
    Requests: Requests;    
}