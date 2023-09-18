import { Account } from "@/modules/account/database/repositories/impl/typeorm/entities/account.entity";
import { Company } from "@/modules/company/company/database/repositories/impl/typeorm/entities/company.entity";
import { Product } from "@/modules/company/product/database/repositories/impl/typeorm/entities/product.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Requests{
    @PrimaryGeneratedColumn('identity')
    codPedido: number

    @Column("boolean")
    status: boolean

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    dataPedido: Date

    @OneToOne(() => Account, Account => Account.Requests)
    @JoinColumn()
    Account: Account;

    @OneToMany(() => Company, Company => Company.Requests)
    Company: Company[];

    @OneToMany(() => Product, Product => Product.Requests)
    Product: Product[];
}