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

@Entity()
export class Income extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
  })
  name!: string;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  amount!: number;

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
