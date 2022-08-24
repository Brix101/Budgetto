import { Field, Float, Int, ObjectType } from "type-graphql";
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
export class Budget extends BaseEntity {
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

  @Field()
  @Column("text")
  note?: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
