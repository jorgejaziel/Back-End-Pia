import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm";
import { Product } from "./Product";
import { User } from './User'
 
@Entity()
export class Sale {

  @PrimaryGeneratedColumn()
  saleId: number;

  @ManyToOne(type => User, user => user.sales, {cascade: true} )
  user: User | number;

  @ManyToOne(type => Product, product => product.sale, {eager: true})
  product: number[];
}
