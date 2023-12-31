import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column("varchar", { length: 255, unique: true })
    username: string;

    @Column("varchar", { length:255})
    email: string
  
    @Column("varchar", { length: 255 })
    password: string;
    
}   