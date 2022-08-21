import { MaxLength } from "class-validator";
import {
  Field,
  Float,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from "type-graphql";
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

registerEnumType(Category, {
  name: "Category", // this one is mandatory
});

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

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  note?: string;

  @Field(() => [Frequency], { nullable: true })
  @ManyToMany(() => Frequency, {
    cascade: true,
  })
  @JoinTable()
  frequency?: Frequency;

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

  @Field((type) => Category)
  category!: Category;

  // @Field(() => [Frequency], { nullable: true })
  // frequency?: Frequency;
}
