import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Product } from "./Product";
 
@Entity()
export class Brand {

  @PrimaryGeneratedColumn()
  brandId: number;

  @Column()
  name : string;
  
  @OneToMany(type => Product, product => product.brand )
  product: Product[];
}
