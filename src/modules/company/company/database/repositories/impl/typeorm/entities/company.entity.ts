import { Product } from "@/modules/company/product/database/repositories/impl/typeorm/entities/product.entity";
import { Requests } from "@/modules/company/requests/database/repositories/impl/typeorm/entities/requests.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Requests, Requests => Requests.Company)
    @JoinColumn()
    Requests: Requests

    @OneToOne(() => Product, Product => Product.Company)
    @JoinColumn()
    Product: Product;
}