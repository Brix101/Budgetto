import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { ApolloServer, gql } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import http from "http";
import { DataSource } from "typeorm";
import { Resolvers, TypeDefs } from "./schema";

const main = async () => {
  new DataSource({
    type: "mysql",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "budgetto",
    entities: [],
    synchronize: true,
    logging: true,
  });

  const app = express();
  const httpServer = http.createServer(app);
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  const server = new ApolloServer({
    typeDefs: TypeDefs,
    resolvers: Resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

main().catch((error) => {
  console.log(error);
});
