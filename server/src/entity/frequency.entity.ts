import { MaxLength, MinLength } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Frequency extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({
    length: 100,
  })
  name!: string;

  @Field()
  @Column("text")
  description?: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}

@InputType()
export class CreateFrequencyInput {
  @Field()
  name!: string;

  // @MinLength(50, {
  //   message: "Description must be at least 50 characters",
  // })
  @MaxLength(1000, {
    message: "Description must not be more than 1000 characters",
  })
  @Field()
  description?: string;

  // @IsNumber()
  // @Min(1)
  // @Field()
  // price: number;
}
