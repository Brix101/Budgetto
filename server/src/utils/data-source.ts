import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
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

export default async () => {
  await AppDataSource.initialize()
    .then(({ driver }) => {
      console.log(`🔌 Connected to ${driver.database} Database`);
      console.log(`Lunching Server`);
    })
    .catch((error) => console.log(error));
};
