import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import config from "config";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import http from "http";
import { buildSchema } from "type-graphql";
import resolvers from "./resolvers";
import dataSource from "./utils/data-source";

const main = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: config.get("corsOrigin"),
    })
  );

  const port = config.get("port") as number;

  const schema = await buildSchema({
    resolvers,
  });
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await dataSource();
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: port }, resolve)
  );
  console.log(
    `☁️🚀☁️ Server lunch at http://localhost:4000${server.graphqlPath}`
  );
};

main().catch((error) => {
  console.log(error);
});
