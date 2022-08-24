import { MaxLength } from "class-validator";
import { Field, Float, InputType, Int, ObjectType } from "type-graphql";

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category.enum";

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
    default: Category.MONTHLY,
  })
  category!: Category;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  note?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

@InputType()
export class CreateExpenseInput {
  @Field()
  name!: string;

  @Field(() => Float)
  amount!: number;

  @MaxLength(1000, {
    message: "Description must not be more than 1000 characters",
  })
  @Field({ nullable: true })
  note?: string;

  @Field(() => Category)
  category!: Category;
}
