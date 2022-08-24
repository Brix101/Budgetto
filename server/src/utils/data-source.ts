import config from "config";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: config.get("host"),
  port: config.get("db_port"),
  username: config.get("username"),
  password: config.get("password"),
  database: config.get("database"),
  synchronize: config.get("synchronize"),
  logging: config.get("logging"),
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
