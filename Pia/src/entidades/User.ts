import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Sale } from "./Sale";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    @OneToMany(type => Sale, sale => sale.user, {eager: true} )
    sales: Sale[];
}
