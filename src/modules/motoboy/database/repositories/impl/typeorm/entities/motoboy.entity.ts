import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Motoboy{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    cnh: number

    @Column("varchar", {unique: true, length: 8})
    veiculo: string
}