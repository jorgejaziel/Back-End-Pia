import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from "typeorm";
import { Brand } from "./Brand";
import { Sale } from "./Sale";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    productId: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    size: string;

    @OneToMany(type => Sale, sale => sale.saleId, { cascade: true})
    sale: number[];

    @ManyToOne(type => Brand, brand => brand.product)
    brand: Brand;
}
