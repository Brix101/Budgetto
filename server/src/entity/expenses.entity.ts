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
import { PeriodicalType } from "./periodicalType.entity";

export enum Category {
  ESSENTIAL = "essential",
  NON_ESSENTIAL = "non essential",
}

@Entity()
export class Expenses extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
  })
  name!: string;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  amount!: number;

  @Column({
    type: "enum",
    enum: Category,
    default: Category.NON_ESSENTIAL,
  })
  category!: Category;

  @Column("text")
  note?: string;

  @ManyToMany(() => PeriodicalType, {
    cascade: true,
  })
  @JoinTable()
  periodicalType?: PeriodicalType[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
