import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BudgetsModule } from './budget/budget.module';
import { DeserializeUserMiddleware } from './common/middleware/deserializeUser.middleware';
import { LedgerModule } from './ledger/ledger.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      cors: {
        origin:["http://190.160.15.187:8000"],
        credentials: true,
      },
      playground:{
        settings:{
          "request.credentials": "include", // Otherwise cookies won't be sent
        }
      },
      introspection: true,
      context: ({ req, res }) => ({ req, res }),      
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_HOST'),
        dbName: configService.get<string>('DATABASE_NAME'),
      }),
    }),
    BudgetsModule,
    UsersModule,
    AuthModule,
    LedgerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(DeserializeUserMiddleware).forRoutes('*');
  }
}