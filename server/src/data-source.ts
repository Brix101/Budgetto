import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "budgetto",
  synchronize: true,
  logging: true,
  entities: ["*/entity/*.ts"],
  migrations: [],
  subscribers: [],
});
