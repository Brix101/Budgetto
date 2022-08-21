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

@ObjectType()
@Entity()
export class Income extends BaseEntity {
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
  @Column("text")
  note?: string;

  @ManyToMany(() => Frequency, {
    cascade: true,
  })
  @JoinTable()
  frequency?: Frequency[];

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
