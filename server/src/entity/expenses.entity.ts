import { Field, Float, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Frequency } from "./frequency.entity";

export enum Category {
  ESSENTIAL = "essential",
  NON_ESSENTIAL = "non essential",
}

@ObjectType()
@Entity()
export class Expenses extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({
    length: 100,
  })
  name!: string;

  @Field(() => Float)
  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  amount!: number;

  @Field()
  @Column({
    type: "enum",
    enum: Category,
    default: Category.NON_ESSENTIAL,
  })
  category!: Category;

  @Field()
  @Column("text")
  note?: string;

  @ManyToMany(() => Frequency, {
    cascade: true,
  })
  @JoinTable()
  frequency?: Frequency[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
