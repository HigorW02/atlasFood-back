import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn('increment')
    codProduto: number

    @Column('varchar', {length: 100})
    nomeProduto: string

    @Column('varchar')
    valor: string
}