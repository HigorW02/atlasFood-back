import { Company } from "@/modules/company/company/database/repositories/impl/typeorm/entities/company.entity";
import { Requests } from "@/modules/company/requests/database/repositories/impl/typeorm/entities/requests.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn('increment')
    codProduto: number

    @Column('varchar', {length: 100})
    nomeProduto: string 

    @Column('varchar')
    valor: string

    @OneToMany(() => Company, Company => Company.Product)
    Company: Company

    @ManyToOne(() => Requests, Requests => Requests.Product)
    Requests: Requests;
}