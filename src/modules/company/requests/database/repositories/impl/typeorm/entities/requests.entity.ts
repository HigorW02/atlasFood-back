import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}